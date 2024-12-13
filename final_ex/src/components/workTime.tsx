"use client";

import React, { useState } from "react";
import { DateTime } from "luxon";
import TimePickerDialog from "./timePickerDialog";
import { Slider } from "@mui/material";

const WorkTime = () => {
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
  const [isTimePicaDialogVisible, setIsTimePicaDialogVisible] = useState(false);

  const convertHMin = (min: number) => {
    if (min < 0) {
      return `-${Math.trunc((-1 * min) / 60)}h${(-1 * min) % 60}min`;
    }
    return `${Math.trunc(min / 60)}h${min % 60}min`;
  };

  const onChangeSlider = (event: Event, value: number | Array<number>) => {
    if (typeof value !== "object") {
      setTodaysOvertime(value);
      setOvertime(defaultThisMonthsOvertime + value);
      setWorkTime(defaultWorkTime + value);
      setEnd(start.plus({ minutes: defaultWorkTime + value + 60 }));
    }
  };

  return (
    <>
      <div className="text-center m-2 w-56">
        <p>本日の業務予定時間</p>
        <p>
          {start.toFormat("HH:mm")}～{end.toFormat("HH:mm")} (
          {convertHMin(workTime)})
        </p>
        <button
          className="bg-blue-500 text-white cursor-pointer text-sm px-4 py-2 rounded-md border-none"
          onClick={() => {
            setIsTimePicaDialogVisible(true);
          }}
        >
          時間を編集
        </button>
      </div>
      <TimePickerDialog
        onClose={() => {
          setIsTimePicaDialogVisible(false);
        }}
        defaultValue={start}
        open={isTimePicaDialogVisible}
        onChange={(e) => {
          if (e) {
            setStart(e);
            // 休憩1h(60min)を加算
            setEnd(e.plus({ minutes: workTime + 60 }));
          }
        }}
      />
      <p className="text-center">今月の残り残業時間: {convertHMin(overtime)}</p>
      <p className="text-center">
        本日の残業時間: {convertHMin(TodaysOvertime)}
      </p>
      <p className="text-center">残業時間を調整</p>
      <Slider
        valueLabelDisplay="off"
        onChange={onChangeSlider}
        value={TodaysOvertime}
        min={-210}
        max={450}
        step={15}
      />
    </>
  );
};

export default WorkTime;
