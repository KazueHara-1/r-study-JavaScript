"use client";

import React, { useState } from "react";
import { DateTime } from "luxon";

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

  return (
    <div className="text-center m-2">
      本日の業務予定
      <br />
      {start.toFormat("HH:mm")}～{end.toFormat("HH:mm")}
    </div>
  );
};

export default WorkTime;
