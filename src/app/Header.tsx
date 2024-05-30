"use client";
import { SignInOut } from "~/components/auth/signInOutButton";
import { PomodoroWithPalsHeader } from "./PomodoroWithPalsHeader";

export const Header = () => {
  return (
    <header className="flex items-center justify-around p-1">
      <PomodoroWithPalsHeader className="text-3xl font-bold" />
      <SignInOut />
    </header>
  );
};
