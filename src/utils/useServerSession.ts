import { getServerSession } from "next-auth";
import { authOptions } from "~/auth/authOptions";

export const useServerSession = async () => {
  return await getServerSession(authOptions);
};
