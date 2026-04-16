import React from "react";

export type UserRole = "student" | "instructor" | string;

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  role: UserRole;
}

export interface TokenPair {
  access: string;
  refresh: string;
}

export interface AuthRouteSuccess {
  ok: true;
}

export interface AuthErrorResponse {
  detail?: string;
  message?: string;
  errors?: unknown;

  [key: string]: unknown;
}

export interface SocialLink {
  platform_name: string;
  url: string;
}

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  social_links: SocialLink[];
}

export interface AuthFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

export interface AuthQuestionProp {
  question: string;
  route: string;
  linkTitle: string;
}
