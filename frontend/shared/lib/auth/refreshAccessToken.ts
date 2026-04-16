import { cookies } from "next/headers";
import { env } from "@/shared/config/env";
import {
  AUTH_COOKIE_NAMES,
  getAccessTokenCookieOptions,
  getDeleteCookieOptions,
  getRefreshTokenCookieOptions,
} from "@/shared/lib/auth/cookies";
import type { RefreshResult, RefreshResponse } from "@/shared/types/auth.types";

export const refreshAccessToken = async (): Promise<RefreshResult> => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get(AUTH_COOKIE_NAMES.refreshToken)?.value;

    if (!refreshToken) {
      return { accessToken: null };
    }

    const response = await fetch(`${env.apiBaseUrl}/api/auth/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
      cache: "no-store",
    });

    if (!response.ok) {
      cookieStore.set(
        AUTH_COOKIE_NAMES.accessToken,
        "",
        getDeleteCookieOptions(),
      );
      cookieStore.set(
        AUTH_COOKIE_NAMES.refreshToken,
        "",
        getDeleteCookieOptions(),
      );

      return { accessToken: null };
    }

    const data = (await response.json()) as RefreshResponse;

    if (!data.access) {
      return { accessToken: null };
    }

    cookieStore.set(
      AUTH_COOKIE_NAMES.accessToken,
      data.access,
      getAccessTokenCookieOptions(),
    );

    if (data.refresh) {
      cookieStore.set(
        AUTH_COOKIE_NAMES.refreshToken,
        data.refresh,
        getRefreshTokenCookieOptions(),
      );
    }

    return { accessToken: data.access };
  } catch (error) {
    console.error("refreshAccessToken error:", error);
    return { accessToken: null };
  }
};
