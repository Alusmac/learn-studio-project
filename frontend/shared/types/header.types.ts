import React from "react";

export interface PublicHeaderProps {
  showNavigation?: boolean;
}

export interface LinkButtonProps {
  route: string;
  text: string;
}

export interface ButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}
