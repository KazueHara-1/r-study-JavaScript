"use client";

// TODO:
// ・リアルタイムで勤務グラフが更新される

import { DateTime } from "luxon";
import { useState, useCallback, useEffect } from "react";
import { Slider } from "@mui/material";
import Circle from "@/components/circle";
import Clock from "@/components/clock";
import SaveOvertime from "@/components/saveOvertime";
import TimePickerDialog from "@/components/timePickerDialog";
import WorkTime from "@/components/workTime";
import { convertHMin } from "@/utils/convertHMin";
import { BREAK_TIME_KEY, OVERTIME_KEY } from "@/utils/const";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const defaultWorkTime = 7.5 * 60; // 7.5h
  const defaultThisMonthsOvertime = localStorage.getItem(OVERTIME_KEY)
    ? Number(localStorage.getItem(OVERTIME_KEY))
    : 0;
  const defaultStartTime = DateTime.now().set({
    hour: 9,
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  const defaultEndTime = DateTime.now().set({
    hour: 17,
    minute: 30,
    second: 0,
    millisecond: 0,
  });
  const breakTimeFromLocalStorage = localStorage.getItem(BREAK_TIME_KEY);
  const lunchTime = breakTimeFromLocalStorage
    ? DateTime.fromISO(breakTimeFromLocalStorage)
    : DateTime.now().set({
        hour: 12,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
  // 時間の単位は min
  const [workTime, setWorkTime] = useState(defaultWorkTime);
  const [overtime, setOvertime] = useState(defaultThisMonthsOvertime);
  const [TodaysOvertime, setTodaysOvertime] = useState(0);
  const [percent, setPercent] = useState(0);
  const [start, setStart] = useState(defaultStartTime);
  const [end, setEnd] = useState(defaultEndTime);
  const [isTimePickerDialogVisible, setIsTimePickerDialogVisible] =
    useState(false);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const changeOvertime = useCallback(
    (event: Event, value: number | Array<number>) => {
      if (typeof value !== "object") {
        setTodaysOvertime(value);
        setOvertime(defaultThisMonthsOvertime + value);
        setWorkTime(defaultWorkTime + value);
        setEnd(start.plus({ minutes: defaultWorkTime + value + 60 }));
      }
    },
    [defaultThisMonthsOvertime, defaultWorkTime, start]
  );

  const openTimePickerDialog = useCallback(() => {
    setIsTimePickerDialogVisible(true);
  }, []);

  useEffect(() => {
    const totalWorkingTimeNow = () => {
      const now = DateTime.now();
      // デバッグ用
      // const now = DateTime.now().set({ hour: 17, minute: 20 });
      const lunch = DateTime.now().set({ hour: 12, minute: 0, second: 0 });
      const diffLunch = now.diff(lunch, "minutes");
      const diffLunchMin = diffLunch.get("minutes");
      const diff = now.diff(start, "minutes");
      let diffMin;
      if (diffLunchMin < 0) {
        diffMin = diff.get("minutes");
      } else if (60 < diffLunchMin) {
        diffMin = diff.get("minutes") - 60;
      } else {
        diffMin = diff.get("minutes") - diffLunchMin;
      }
      if (diffMin < 0) {
        return 0;
      }
      return diffMin / workTime;
    };
    const intervalId = setInterval(() => {
      setPercent(totalWorkingTimeNow());
      const now = DateTime.now();
      if (lunchTime < now && now < lunchTime.plus({ hour: 1 })) {
        setIsBreak(true);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lunchTime, start, workTime]);
  const bgClassName = twMerge(
    "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
    (isBreak || 1 < percent) && "bg-[#FFEFD5]"
  );

  return (
    <div className={bgClassName}>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <div>
          <WorkTime
            start={start}
            end={end}
            workTime={workTime}
            openTimePickerDialog={openTimePickerDialog}
          />
          <TimePickerDialog
            onClose={() => {
              setIsTimePickerDialogVisible(false);
            }}
            defaultValue={start}
            open={isTimePickerDialogVisible}
            onChange={(e) => {
              if (e) {
                setStart(e);
                // 休憩1h(60min)を加算
                setEnd(e.plus({ minutes: workTime + 60 }));
              }
            }}
          />
          <p className="text-center">
            今月の残り残業時間:
            <span
              className={twMerge(
                "font-bold",
                overtime < 0 && "text-blue-400",
                0 < overtime && "text-red-500"
              )}
            >
              {convertHMin(overtime)}
            </span>
          </p>
          <p className="text-center">
            本日の残業時間:
            <span
              className={twMerge(
                "font-bold",
                TodaysOvertime < 0 && "text-blue-400",
                0 < TodaysOvertime && "text-red-500"
              )}
            >
              {convertHMin(TodaysOvertime)}
            </span>
          </p>
          <p className="text-center">残業時間を調整</p>
          <Slider
            valueLabelDisplay="off"
            onChange={changeOvertime}
            value={TodaysOvertime}
            min={-210}
            max={450}
            step={15}
          />
          <div className="flex justify-center">
            <Circle percent={percent} isBreak={isBreak}>
              <Clock />
            </Circle>
          </div>
          {1 < percent && (
            <p className="text-center font-bold py-4 text-3xl">
              本日もお疲れさまでした！
            </p>
          )}
          <SaveOvertime
            handleClose={() => {
              setIsSnackbarVisible(false);
            }}
            isOpen={isSnackbarVisible}
            overtime={overtime}
            showSnackBar={() => {
              setIsSnackbarVisible(true);
            }}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
