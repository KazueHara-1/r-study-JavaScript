"use client";

import Clock from "@/components/clock";
import Circle from "@/components/circle";
import WorkTime from "@/components/workTime";

export default function Main() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>
        <WorkTime />
        <Circle>
          <Clock />
        </Circle>
      </div>
    </main>
  );
}
