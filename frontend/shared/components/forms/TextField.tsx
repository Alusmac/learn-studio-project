import { Field } from "formik";
import BaseFieldWrapper from "@/shared/components/forms/BaseFieldWrapper";
import type { TextFieldProps } from "@/shared/types/form.types";

const TextField = ({
  name,
  label,
  type = "text",
  placeholder,
}: TextFieldProps) => (
  <BaseFieldWrapper name={name} label={label}>
    <Field
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      className="focus:ring-primary-accent bg-primary-light rounded-xl border px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2"
    />
  </BaseFieldWrapper>
);

export default TextField;
