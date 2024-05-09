"use client";

import { Button, ButtonProps } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { SignInOut } from "./components/auth/signInOutButton";
import { useCreateRoomMutation } from "~/services/room";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SelectionButton = (
  props: ButtonProps & React.RefAttributes<HTMLButtonElement>,
) => {
  return (
    <Button
      className={cn(props.className, "min-w-44 py-4")}
      {...props}
    ></Button>
  );
};

const Header = () => {
  return (
    <header className="flex p-2">
      <div className="ml-auto mr-0 w-fit">
        <SignInOut />
      </div>
    </header>
  );
};

export default function Home() {
  const { mutate: createRoom, isPending } = useCreateRoomMutation();
  const session = useSession();
  const [creatingRoom, setCreatingRoom] = useState(false);
  const router = useRouter();

  async function handleCreateNewRoom(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();
    setCreatingRoom(true);
    createRoom(void {}, {
      onSuccess: (res) => {
        console.log(res);
        router.push(`/room/${res.id}`);
      },
    });
  }

  return creatingRoom ? (
    <LoadingPage isPending={isPending} />
  ) : (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-background-work to-background-break p-2">
      <Header />
      <div className="flex h-full items-center justify-center pt-28">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] md:text-[3rem]">WELCOME TO</h2>
            <h1 className="bg-gradient-to-r from-primary-break to-primary-work bg-clip-text text-center text-[2rem] font-semibold text-transparent drop-shadow md:text-[6rem]">
              POMODORO WITH PALS
            </h1>
          </div>
          {
            <div className="flex flex-col items-center gap-4 text-[24px]">
              {session.data ? (
                <>
                  <SelectionButton onClick={handleCreateNewRoom}>
                    New room
                  </SelectionButton>
                  <div className="flex items-center gap-4">
                    <SelectionButton>Find some pals</SelectionButton>
                    <Input placeholder="Code" />
                  </div>
                </>
              ) : (
                <SignInOut />
              )}
            </div>
          }
        </div>
      </div>
    </main>
  );
}

const LoadingPage = (props: { isPending: boolean }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background-work to-background-break p-2">
      <div className="">Loading your room!</div>
      {props.isPending ?? (
        <div className="absolute bottom-0 right-0">Creating!</div>
      )}
    </main>
  );
};
