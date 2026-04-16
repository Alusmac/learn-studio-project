import React from "react";

export interface BaseFieldWrapperProps {
  name: string;
  label?: string;
  children: React.ReactNode;
}

export interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

export interface SelectFieldProps extends TextFieldProps {
  children: React.ReactNode;
}

export interface SubmitButtonProps {
  children: React.ReactNode;
  loadingText?: string;
  isSubmitting: boolean;
}
