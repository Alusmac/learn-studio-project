"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { login } from "../api/login";
import { loginSchema } from "../schemas/loginSchema";
import SubmitButton from "@/shared/components/forms/SubmitButton";
import TextField from "@/shared/components/forms/TextField";
import AuthQuestion from "@/features/auth/components/AuthQuestion";
import { routes } from "@/shared/config/routes";

const LoginForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setStatus(null);
          await login(values);
          router.push(routes.dashboard);
          router.refresh();
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Login failed";
          setStatus(message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="flex flex-col gap-4 lg:gap-6">
          <TextField
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
          />

          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="••••••••"
          />

          {status && (
            <div className="text-primary-red text-center text-sm">{status}</div>
          )}
          <AuthQuestion
            question="Do not have an account"
            route={routes.register}
            linkTitle="Register"
          />
          <SubmitButton isSubmitting={isSubmitting}>Login</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
