import RegisterForm from "@/features/auth/components/RegisterForm";
import AuthWrapper from "@/features/auth/components/AuthPageWrapper";

const RegisterPage = () => (
  <AuthWrapper title="Create account">
    <RegisterForm />
  </AuthWrapper>
);

export default RegisterPage;
