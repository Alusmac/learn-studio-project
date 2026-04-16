import type { CurrentUser } from "@/features/auth/types/auth.types";

export interface Session {
  accessToken: string;
  user: CurrentUser;
  isAuthenticated: true;
}

export interface RefreshResult {
  accessToken: string | null;
}

export type RefreshResponse = {
  access: string;
  refresh?: string;
};
