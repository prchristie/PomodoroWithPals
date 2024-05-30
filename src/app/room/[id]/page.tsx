"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-primary-foreground">
      <PomodoroTimer />
    </div>
  );
}

const useInterval = (callback: () => void, ms: number) => {
  useEffect(() => {
    if (ms === 0) {
      return;
    }
    const id = setInterval(callback, ms);
    return () => clearInterval(id);
  });
};

const PomodoroTimer = () => {
  const { setTheme } = useTheme();

  const [workTime, setWorkTime] = useState(6);
  const [breakTime, setBreakTime] = useState(6);
  const [mode, setMode] = useState<"work" | "break">("work");
  const [timeS, setTimeS] = useState(workTime);
  const [started, setStarted] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  useInterval(() => setTimeS((t) => t - 1), started ? 1000 : 0);
  useEffect(() => setTimeS(workTime), [workTime]);
  useEffect(() => {
    const theme = mode === "break" ? "break-light" : "work-light";
    console.log(theme);
    setTheme(theme);
  }, [mode, setTheme]);

  if (timeS <= 0) {
    setMode((m) => (m === "break" ? "work" : "break"));
    setStarted(false);
    setTimeS(mode === "break" ? breakTime : workTime);
  }

  const seconds = timeS % 60;
  const minutes = Math.floor(timeS / 60);

  return (
    <>
      {mode}
      <div className={cn("relative h-64 w-64 rounded-full bg-primary")}>
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-6xl text-primary-foreground">
          {minutes} : {seconds.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="flex gap-5">
        <Button onClick={() => setStarted((s) => !s)}>
          {started ? "Stop" : "Start"}
        </Button>
        <Button onClick={() => setOpenSettingsModal(true)}>Settings :O</Button>
      </div>
      {openSettingsModal && (
        <>
          <div
            className="absolute h-screen w-screen"
            onClick={() => setOpenSettingsModal(false)}
          ></div>
          <div className="absolute flex h-96 w-96 items-center justify-center">
            <SettingsPage
              workTime={workTime}
              setWorkTime={setWorkTime}
              breakTime={breakTime}
              setBreakTime={setBreakTime}
            />
          </div>
        </>
      )}
    </>
  );
};

const SettingsPage = (props: {
  workTime: number;
  setWorkTime: (time: number) => void;
  breakTime: number;
  setBreakTime: (time: number) => void;
}) => {
  return (
    <div className="flex h-full w-full justify-center rounded bg-primary/95 p-4">
      <form className="flex w-full flex-col gap-6">
        <label className="flex items-center justify-around">
          <span>Work time</span>
          <Input
            onChange={(e) => props.setWorkTime(Number(e.target.value) * 60)}
            className="w-40 text-input"
            value={props.workTime / 60}
          />
        </label>
        <label className="flex justify-around">
          <span>Break time</span>
          <Input
            onChange={(e) => props.setBreakTime(Number(e.target.value) * 60)}
            className="w-40"
            value={props.breakTime / 60}
          />
        </label>
      </form>
    </div>
  );
};
