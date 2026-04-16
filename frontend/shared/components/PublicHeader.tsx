import { routes } from "@/shared/config/routes";
import LinkButton from "@/shared/components/LinkButton";
import Logo from "@/shared/components/Logo";
import type { PublicHeaderProps } from "@/shared/types/header.types";

const PublicHeader = ({ showNavigation = true }: PublicHeaderProps) => {
  return (
    <header
      className={`flex items-center justify-between px-6 pt-6 md:px-18 md:pt-10 lg:px-32 lg:pt-16 ${showNavigation ? "bg-transparent" : "bg-secondary-light"}`}
    >
      <Logo />
      {showNavigation && (
        <nav>
          <ul className="flex items-center gap-4 lg:gap-8">
            <li>
              <LinkButton route={routes.login} text="Login" />
            </li>
            <li>
              <LinkButton route={routes.register} text="Register" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default PublicHeader;
