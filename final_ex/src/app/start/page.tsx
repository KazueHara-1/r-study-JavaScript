"use client";

import { useState } from "react";
import Button from "@/components/button";
import { OVERTIME_KEY } from "@/utils/const";
import Image from "next/image";
import NumberInputBasic from "@/components/numberInput";

export default function Home() {
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeMinutes, setOvertimeMinutes] = useState(0);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-4xl">ようこそ！</p>
        <label
          htmlFor="time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          本日までの残業時間を入力してください
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
        <Button
          className="mx-auto"
          type="submit"
          onClick={() => {
            localStorage.setItem(
              OVERTIME_KEY,
              (overtimeHours * 60 + overtimeMinutes).toString()
            );
            location.href = "../working";
          }}
        >
          業務開始
        </Button>
        <p className="text-sm">
          はじめてでない方は
          <a className="text-blue-600 underline" href="../working">
            こちら
          </a>
        </p>
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
