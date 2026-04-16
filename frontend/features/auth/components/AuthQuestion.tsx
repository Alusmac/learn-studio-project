import Link from "next/link";
import type { AuthQuestionProp } from "@/features/auth/types/auth.types";

const AuthQuestion = ({ question, route, linkTitle }: AuthQuestionProp) => (
  <p className="text-primary-grey text-sm">
    {question}?
    <Link
      href={route}
      className="text-primary-accent hover:text-primary-dark pl-1 font-medium"
    >
      {linkTitle}
    </Link>
  </p>
);

export default AuthQuestion;
