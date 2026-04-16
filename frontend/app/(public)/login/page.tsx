import LoginForm from "@/features/auth/components/LoginForm";
import AuthPageWrapper from "@/features/auth/components/AuthPageWrapper";

const LoginPage = () => (
  <AuthPageWrapper title="Sign in">
    <LoginForm />
  </AuthPageWrapper>
);

export default LoginPage;
