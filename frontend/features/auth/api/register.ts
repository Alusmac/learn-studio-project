import type {
  AuthErrorResponse,
  AuthRouteSuccess,
  RegisterDto,
} from "../types/auth.types";

export const register = async (
  payload: RegisterDto,
): Promise<AuthRouteSuccess> => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as AuthRouteSuccess & AuthErrorResponse;

  if (!response.ok) {
    throw new Error(data.message ?? "Registration failed");
  }

  return data;
};
