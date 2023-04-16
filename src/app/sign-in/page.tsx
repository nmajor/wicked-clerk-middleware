import { SignIn } from "@clerk/nextjs/app-beta";
import AuthLayout from "~/components/AuthLayout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn signUpUrl="/sign-up" redirectUrl="/dashboard" />
    </AuthLayout>
  );
}
