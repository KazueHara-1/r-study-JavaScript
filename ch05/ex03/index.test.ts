import { isHolidayIf, isHolidaySwitch } from "./index.ts";

const WEEKDAY = ["月", "火", "水", "木", "金"];
const HOLYDAY = ["土", "日"];

describe.each(WEEKDAY)("WEEKDAY Test", (day) => {
  test(`${day}曜日→false(IF文)`, () => {
    expect(isHolidayIf(day)).toBe(false);
  });
  test(`${day}曜日→false(SWITCH文)`, () => {
    expect(isHolidaySwitch(day)).toBe(false);
  });
});

describe.each(HOLYDAY)("HOLYDAY Test", (day) => {
  test(`${day}曜日→true(IF文)`, () => {
    expect(isHolidayIf(day)).toBe(true);
  });
  test(`${day}曜日→true(SWITCH文)`, () => {
    expect(isHolidaySwitch(day)).toBe(true);
  });
});
