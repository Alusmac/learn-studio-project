import { cookies } from "next/headers";
import { AUTH_COOKIE_NAMES } from "@/shared/lib/auth/cookies";
import { getCurrentUser } from "@/shared/lib/auth/getCurrentUser";
import { refreshAccessToken } from "@/shared/lib/auth/refreshAccessToken";
import type { Session } from "@/shared/types/auth.types";

export const getSession = async (): Promise<Session | null> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(AUTH_COOKIE_NAMES.accessToken)?.value;

  if (!accessToken) {
    return null;
  }

  const user = await getCurrentUser(accessToken);

  if (user) {
    return {
      accessToken,
      user,
      isAuthenticated: true,
    };
  }

  const refreshed = await refreshAccessToken();

  if (!refreshed.accessToken) {
    return null;
  }

  const refreshedUser = await getCurrentUser(refreshed.accessToken);

  if (!refreshedUser) {
    return null;
  }

  return {
    accessToken: refreshed.accessToken,
    user: refreshedUser,
    isAuthenticated: true,
  };
};
