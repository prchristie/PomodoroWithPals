import { NextResponse } from "next/server";
import db from "~/backend/db/db";
import { rooms } from "~/backend/db/schemas";
import { CreateRoomResponse, ErrorResponse } from "~/core/dto/createRoomDto";
import { useServerSession } from "~/core/utils/useServerSession";

export async function POST(): Promise<
  NextResponse<CreateRoomResponse | ErrorResponse>
> {
  const session = await useServerSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  const room = (
    await db.insert(rooms).values({ owner: session.user.id }).returning()
  )[0];

  return NextResponse.json({ id: room.id });
}
