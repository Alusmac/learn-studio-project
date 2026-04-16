import { env } from "@/shared/config/env";

export const AUTH_COOKIE_NAMES = {
  accessToken: "access_token",
  refreshToken: "refresh_token",
} as const;

const ACCESS_TOKEN_MAX_AGE = 60 * 15;
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7;

export const getAccessTokenCookieOptions = () => ({
  httpOnly: true,
  secure: env.isProd,
  sameSite: "lax" as const,
  path: "/",
  maxAge: ACCESS_TOKEN_MAX_AGE,
});

export const getRefreshTokenCookieOptions = () => ({
  httpOnly: true,
  secure: env.isProd,
  sameSite: "lax" as const,
  path: "/",
  maxAge: REFRESH_TOKEN_MAX_AGE,
});

export const getDeleteCookieOptions = () => ({
  httpOnly: true,
  secure: env.isProd,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 0,
});
