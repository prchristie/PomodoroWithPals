import { getServerSession } from "next-auth";
import { authOptions } from "~/backend/auth/authOptions";

export const useServerSession = async () => {
  return await getServerSession(authOptions);
};
