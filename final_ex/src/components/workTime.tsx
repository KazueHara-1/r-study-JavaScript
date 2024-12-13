import React from "react";
import { DateTime } from "luxon";
import { convertHMin } from "@/utils/convertHMin";

interface WorkTimeProps {
  start: DateTime<true>;
  end: DateTime<true>;
  workTime: number;
  openTimePickerDialog: () => void;
}

const WorkTime = ({
  start,
  end,
  workTime,
  openTimePickerDialog,
}: WorkTimeProps) => {
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
          onClick={openTimePickerDialog}
        >
          時間を編集
        </button>
      </div>
    </>
  );
};

export default WorkTime;
