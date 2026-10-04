import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";
import SubmitButton from "../../components/auth/SubmitButton";
import { ArrowRightIcon, EmailIcon, LockIcon } from "../../components/ui/Icons";
import AuthLayout from "../../layouts/AuthLayout";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporary while we build authentication.
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <AuthCard className="mx-auto max-w-md">
        <AuthHeader
          eyebrow="Welcome back"
          title="Sign in to TicketDesk"
          description="Enter your credentials to access your support workspace."
        />

        <form className="space-y-5" onSubmit={handleSubmit}>
          <FormField
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="name@company.com"
            autoComplete="email"
            icon={<EmailIcon />}
            required
          />

          <PasswordField
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            icon={<LockIcon />}
            labelAction={
              <Link
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            }
            required
          />

          <div className="flex items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <label className="flex cursor-pointer items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <input
                className="size-4 accent-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:accent-emerald-500 dark:focus-visible:ring-offset-zinc-900"
                type="checkbox"
                defaultChecked
              />
              <span>Remember me</span>
            </label>
            <span className="hidden sm:inline">
              Keep me signed in on this device
            </span>
          </div>

          <SubmitButton icon={<ArrowRightIcon />}>Sign in</SubmitButton>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-emerald-600 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            to="/register"
          >
            Create account
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
