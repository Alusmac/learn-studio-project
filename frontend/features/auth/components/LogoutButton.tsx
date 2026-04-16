"use client";

import { useRouter } from "next/navigation";
import { logout } from "../api/logout";
import { routes } from "@/shared/config/routes";
import Button from "@/shared/components/Button";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push(routes.login);
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <Button handleClick={handleLogout} buttonText="Logout" />;
};
