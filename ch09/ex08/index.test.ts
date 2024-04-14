import { AlarmClock } from './index.ts';

// 対策：beforeEach()等を使い、状態の初期化・初期設定を行う。

describe('前提条件：通常', () => {
  let alarm: AlarmClock;
  beforeEach(() => {
    alarm = new AlarmClock();
  });
  test.each([['normal', 'alarmSet']])('before:%s, after:%s', () => {
    expect(alarm.setAlarm()).toBe('none');
  });
});

describe('前提条件：アラームセット中', () => {
  let alarm: AlarmClock;
  beforeEach(() => {
    alarm = new AlarmClock();
    alarm.setAlarm();
  });
  test.each([['alarmSet', 'normal']])('before:%s, after:%s', () => {
    expect(alarm.cancelAlarm()).toBe('none');
  });
  test.each([['alarmSet', 'alarmSounding']])('before:%s, after:%s', () => {
    expect(alarm.reachedToAlarmTime()).toBe('soundAlarm');
  });
});

describe('前提条件：アラーム鳴動中', () => {
  let alarm: AlarmClock;
  beforeEach(() => {
    alarm = new AlarmClock();
    alarm.setAlarm();
    alarm.reachedToAlarmTime();
  });
  test.each([['alarmSounding', 'normal']])('before:%s, after:%s', () => {
    expect(alarm.cancelAlarm()).toBe('stopAlarm');
  });
  test.each([['alarmSounding', 'snoozing']])('before:%s, after:%s', () => {
    expect(alarm.snooze()).toBe('stopAlarm');
  });
});

describe('前提条件：スヌーズ中', () => {
  let alarm: AlarmClock;
  beforeEach(() => {
    alarm = new AlarmClock();
    alarm.setAlarm();
    alarm.reachedToAlarmTime();
    alarm.snooze();
  });
  test.each([['snoozing', 'normal']])('before:%s, after:%s', () => {
    expect(alarm.elapseSnoozeTime()).toBe('soundAlarm');
  });
  test.each([['snoozing', 'snoozing']])('before:%s, after:%s', () => {
    expect(alarm.cancelAlarm()).toBe('none');
  });
});
