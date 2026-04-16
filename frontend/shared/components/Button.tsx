import type { ButtonProps } from "@/shared/types/header.types";

const Button = ({ handleClick, buttonText }: ButtonProps) => (
  <button
    onClick={handleClick}
    className="bg-secondary-dark text-primary-light hover:bg-primary-accent rounded-xl px-4 py-3 transition disabled:cursor-not-allowed disabled:opacity-50"
  >
    {buttonText}
  </button>
);

export default Button;
