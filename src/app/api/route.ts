import { getServerSession } from "next-auth";
import { useServerSession } from "../../utils/use-server-session";

export async function GET(req: Request, res: Response) {
  const session = await useServerSession();
  console.log(session);

  return Response.json({});
}
