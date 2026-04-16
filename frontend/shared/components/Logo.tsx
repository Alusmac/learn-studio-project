import Link from "next/link";
import { routes } from "@/shared/config/routes";

const Logo = () => (
  <Link
    href={routes.home}
    className="hover:text-primary-accent content-between text-xl font-bold"
  >
    Learn Studio
  </Link>
);

export default Logo;
