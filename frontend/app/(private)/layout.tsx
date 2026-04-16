import React from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/shared/lib/auth/getSession";
import { routes } from "@/shared/config/routes";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getSession();

  if (!session) {
    redirect(routes.login);
  }

  return <div className="bg-primary-light min-h-screen">{children}</div>;
};

export default PrivateLayout;
