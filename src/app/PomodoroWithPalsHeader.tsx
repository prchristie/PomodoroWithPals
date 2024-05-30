"use client";

import { cn } from "~/lib/utils";

export const PomodoroWithPalsHeader = (props: { className?: string }) => {
  return (
    <h1
      className={cn(
        "bg-gradient-to-r from-primary-break to-primary-work bg-clip-text text-center text-transparent drop-shadow",
        props.className,
      )}
    >
      POMODORO WITH PALS
    </h1>
  );
};
