import { Field } from "formik";
import BaseFieldWrapper from "@/shared/components/forms/BaseFieldWrapper";
import type { SelectFieldProps } from "@/shared/types/form.types";

export const SelectField = ({ name, label, children }: SelectFieldProps) => (
  <BaseFieldWrapper name={name} label={label}>
    <Field
      as="select"
      name={name}
      id={name}
      className="focus:ring-primary-accent bg-primary-light cursor-pointer rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
    >
      {children}
    </Field>
  </BaseFieldWrapper>
);
