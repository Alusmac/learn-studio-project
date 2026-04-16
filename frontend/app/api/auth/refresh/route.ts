import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { env } from "@/shared/config/env";
import {
  AUTH_COOKIE_NAMES,
  getAccessTokenCookieOptions,
  getDeleteCookieOptions,
  getRefreshTokenCookieOptions,
} from "@/shared/lib/auth/cookies";

type RefreshResponse = {
  access: string;
  refresh?: string;
};

export const POST = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get(AUTH_COOKIE_NAMES.refreshToken)?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token is missing" },
        { status: 401 },
      );
    }

    const backendResponse = await fetch(
      `${env.apiBaseUrl}/api/auth/token/refresh/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
        cache: "no-store",
      },
    );

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      const response = NextResponse.json(
        {
          message: data?.detail ?? "Refresh failed",
        },
        { status: backendResponse.status },
      );

      response.cookies.set(
        AUTH_COOKIE_NAMES.accessToken,
        "",
        getDeleteCookieOptions(),
      );
      response.cookies.set(
        AUTH_COOKIE_NAMES.refreshToken,
        "",
        getDeleteCookieOptions(),
      );

      return response;
    }

    const { access, refresh } = data as RefreshResponse;

    if (!access) {
      return NextResponse.json(
        { message: "Backend refresh response does not contain access token" },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ ok: true });

    response.cookies.set(
      AUTH_COOKIE_NAMES.accessToken,
      access,
      getAccessTokenCookieOptions(),
    );

    if (refresh) {
      response.cookies.set(
        AUTH_COOKIE_NAMES.refreshToken,
        refresh,
        getRefreshTokenCookieOptions(),
      );
    }

    return response;
  } catch (error) {
    console.error("Refresh route error:", error);

    return NextResponse.json(
      { message: "Internal server error during refresh" },
      { status: 500 },
    );
  }
};
