import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export const useServerSession = async () => {
  return await getServerSession(authOptions);
};
