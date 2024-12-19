"use client";

import { useEffect, useState } from "react";
import Button from "@/components/button";
import { BREAK_TIME_KEY, OVERTIME_KEY } from "@/utils/const";
import NumberInputBasic from "@/components/numberInput";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";

export default function Home() {
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeMinutes, setOvertimeMinutes] = useState(0);
  const [breakTime, setBreakTime] = useState(
    DateTime.now().set({
      hour: 12,
      minute: 0,
      second: 0,
      millisecond: 0,
    })
  );
  useEffect(() => {
    const defaultThisMonthsOvertime = localStorage.getItem(OVERTIME_KEY)
      ? Number(localStorage.getItem(OVERTIME_KEY))
      : 0;
    setOvertimeHours(Math.trunc(defaultThisMonthsOvertime / 60));
    setOvertimeMinutes(defaultThisMonthsOvertime % 60);
  }, []);
  const saveToLocalStorage = () => {
    localStorage.setItem(
      OVERTIME_KEY,
      (overtimeHours * 60 + overtimeMinutes).toString()
    );
    localStorage.setItem(BREAK_TIME_KEY, breakTime.toJSDate().toISOString());
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-4xl">各種設定</p>
        <label
          htmlFor="time"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          今月の残業時間
        </label>
        <div className="flex gap-2 text-xl items-end">
          <NumberInputBasic
            value={overtimeHours}
            onChange={(e, value) => {
              setOvertimeHours(Number(value));
            }}
          />
          h
          <NumberInputBasic
            max={59}
            min={-59}
            value={overtimeMinutes}
            onChange={(e, value) => {
              setOvertimeMinutes(Number(value));
            }}
          />
          min
        </div>
        <label
          htmlFor="time"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          昼休み
        </label>
        <div className="flex gap-2 text-xl items-center">
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <TimePicker
              sx={{ width: "120px" }}
              ampm={false}
              onChange={(e) => {
                if (e) {
                  setBreakTime(e);
                }
              }}
              defaultValue={breakTime}
            />
          </LocalizationProvider>
          <span>から1時間</span>
        </div>
        <Button className="mx-auto" type="submit" onClick={saveToLocalStorage}>
          保存
        </Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a className="text-blue-600 underline" href="../working">
          戻る
        </a>
      </footer>
    </div>
  );
}
