"use client";

import React, { useState } from "react";
import { DateTime } from "luxon";
import TimePickerDialog from "./timePickerDialog";

const WorkTime = () => {
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
  const [start, setStart] = useState(defaultStartTime);
  const [end, setEnd] = useState(defaultEndTime);
  const [isTimePicaDialogVisible, setIsTimePicaDialogVisible] = useState(false);

  return (
    <>
      <div className="text-center m-2">
        本日の業務予定
        <br />
        {start.toFormat("HH:mm")}～{end.toFormat("HH:mm")}
        <br />
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
          }
        }}
      />
    </>
  );
};

export default WorkTime;
