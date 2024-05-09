import { useServerSession } from "../../utils/useServerSession";

export async function GET(req: Request, res: Response) {
  const session = await useServerSession();
  console.log(session);

  return Response.json({});
}
