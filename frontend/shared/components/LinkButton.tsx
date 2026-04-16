import Link from "next/link";
import type { LinkButtonProps } from "@/shared/types/header.types";

const LinkButton = ({ route, text }: LinkButtonProps) => (
  <Link
    href={route}
    className="bg-secondary-dark text-primary-light hover:bg-primary-accent rounded-xl px-4 py-3 transition disabled:cursor-not-allowed disabled:opacity-50"
  >
    {text}
  </Link>
);

export default LinkButton;
