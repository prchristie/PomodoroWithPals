"use client";

import { LoadingPage } from "~/app/LoadingPage";
import { PomodoroWithPalsHeader } from "~/app/PomodoroWithPalsHeader";
import { SelectionButtons } from "~/app/SelectionButtons";
import { useCreateRoomMutation } from "~/frontend/services/room";

export const Home = () => {
  const { isPending } = useCreateRoomMutation();

  return isPending ? (
    <LoadingPage />
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 pt-28">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] md:text-[3rem]">WELCOME TO</h2>
            <PomodoroWithPalsHeader className="text-[2rem] font-semibold md:text-[6rem]" />
          </div>
          <SelectionButtons />
        </div>
      </div>
    </div>
  );
};
