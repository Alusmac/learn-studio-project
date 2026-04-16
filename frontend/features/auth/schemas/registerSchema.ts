import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string()
    .min(3, "At least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
});
