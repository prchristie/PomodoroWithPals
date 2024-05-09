import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { CreateRoomResponse } from "~/dto/createRoomDto";

const createRoom = async () => {
  const res = await axios.post("/api/room");
  return res.data as CreateRoomResponse;
};

export const useCreateRoomMutation = () =>
  useMutation({
    mutationFn: createRoom,
  });
