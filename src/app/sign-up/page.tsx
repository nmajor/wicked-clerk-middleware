import { SignUp } from "@clerk/nextjs/app-beta";
import AuthLayout from "~/components/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUp signInUrl="/sign-in" redirectUrl="/dashboard" />
    </AuthLayout>
  );
}
