"use client";

import { Input } from "~/components/ui/input";
import { useCreateRoomMutation } from "~/frontend/services/room";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SelectionButton } from "./SelectionButton";

export const SelectionButtons = () => {
  const { mutate: createRoom } = useCreateRoomMutation();
  const router = useRouter();

  const session = useSession();
  const isLoggedIn = Boolean(session.data);

  async function handleCreateNewRoom(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();
    createRoom(void {}, {
      onSuccess: (res) => {
        console.log(res);
        router.push(`/room/${res.id}`);
      },
    });
  }
  return (
    <div className="flex flex-col items-center gap-4 text-[24px]">
      <SelectionButton onClick={handleCreateNewRoom} disabled={!isLoggedIn}>
        New room
      </SelectionButton>
      <div className="flex items-center gap-4">
        <SelectionButton disabled={!isLoggedIn}>Find some pals</SelectionButton>
        <Input disabled={!isLoggedIn} placeholder="Code" />
      </div>
    </div>
  );
};
