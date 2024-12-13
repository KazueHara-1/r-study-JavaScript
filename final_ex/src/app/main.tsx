"use client";

import React, { useCallback, useState } from "react";
import Clock from "@/components/clock";
import Circle from "@/components/circle";
import WorkTime from "@/components/workTime";
import { DateTime } from "luxon";
import { Slider } from "@mui/material";
import TimePickerDialog from "@/components/timePickerDialog";
import { convertHMin } from "@/utils/convertHMin";

// main で主なstateをすべて管理する

export default function Main() {
  const defaultWorkTime = 7.5 * 60; // 7.5h
  const defaultThisMonthsOvertime = 60;
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
  const [overtime, setOvertime] = useState(0);
  const [TodaysOvertime, setTodaysOvertime] = useState(0);
  const [start, setStart] = useState(defaultStartTime);
  const [end, setEnd] = useState(defaultEndTime);
  const [isTimePickerDialogVisible, setIsTimePickerDialogVisible] =
    useState(false);

  const changeOvertime = useCallback(
    (event: Event, value: number | Array<number>) => {
      if (typeof value !== "object") {
        setTodaysOvertime(value);
        setOvertime(defaultThisMonthsOvertime + value);
        setWorkTime(defaultWorkTime + value);
        setEnd(start.plus({ minutes: defaultWorkTime + value + 60 }));
      }
    },
    [defaultWorkTime, start]
  );
  const openTimePickerDialog = useCallback(() => {
    setIsTimePickerDialogVisible(true);
  }, []);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
        <Circle>
          <Clock />
        </Circle>
      </div>
    </main>
  );
}
