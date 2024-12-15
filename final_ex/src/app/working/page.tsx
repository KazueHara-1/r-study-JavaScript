"use client";

import Image from "next/image";
import { DateTime } from "luxon";
import { useState, useCallback } from "react";
import { Slider } from "@mui/material";
import Circle from "@/components/circle";
import Clock from "@/components/clock";
import SaveOvertime from "@/components/saveOvertime";
import TimePickerDialog from "@/components/timePickerDialog";
import WorkTime from "@/components/workTime";
import { convertHMin } from "@/utils/convertHMin";
import { OVERTIME_KEY } from "@/utils/const";

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
  // 時間の単位は min
  const [workTime, setWorkTime] = useState(defaultWorkTime);
  const [overtime, setOvertime] = useState(defaultThisMonthsOvertime);
  const [TodaysOvertime, setTodaysOvertime] = useState(0);
  const [start, setStart] = useState(defaultStartTime);
  const [end, setEnd] = useState(defaultEndTime);
  const [isTimePickerDialogVisible, setIsTimePickerDialogVisible] =
    useState(false);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            今月の残り残業時間: {convertHMin(overtime)}
          </p>
          <p className="text-center">
            本日の残業時間: {convertHMin(TodaysOvertime)}
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
            <Circle percent={totalWorkingTimeNow()}>
              <Clock />
            </Circle>
          </div>
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
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
