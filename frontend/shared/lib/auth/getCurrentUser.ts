import { env } from "@/shared/config/env";
import type { CurrentUser } from "@/features/auth/types/auth.types";

export const getCurrentUser = async (
  accessToken: string,
): Promise<CurrentUser | null> => {
  try {
    const response = await fetch(`${env.apiBaseUrl}/api/users/me/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as CurrentUser;
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
};
