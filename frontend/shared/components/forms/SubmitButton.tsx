import React from "react";
import type { SubmitButtonProps } from "@/shared/types/form.types";

const SubmitButton = ({
  children,
  loadingText = "Loading...",
  isSubmitting,
}: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-primary-dark text-primary-light hover:bg-opacity-90 cursor-pointer rounded-xl px-4 py-3 font-semibold transition-all disabled:opacity-50"
  >
    {isSubmitting ? loadingText : children}
  </button>
);

export default SubmitButton;
