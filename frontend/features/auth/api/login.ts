import type {
  AuthErrorResponse,
  AuthRouteSuccess,
  LoginDto,
} from "../types/auth.types";

export const login = async (payload: LoginDto): Promise<AuthRouteSuccess> => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as AuthRouteSuccess & AuthErrorResponse;

  if (!response.ok) {
    throw new Error(data.message ?? "Login failed");
  }

  return data;
};
