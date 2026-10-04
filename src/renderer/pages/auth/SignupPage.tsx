import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthCard from '../../components/auth/AuthCard';
import AuthHeader from '../../components/auth/AuthHeader';
import FormField from '../../components/auth/FormField';
import PasswordField from '../../components/auth/PasswordField';
import SubmitButton from '../../components/auth/SubmitButton';
import {
  ArrowRightIcon,
  BuildingIcon,
  EmailIcon,
  LockIcon,
  UserIcon,
} from '../../components/ui/Icons';
import AuthLayout from '../../layouts/AuthLayout';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          eyebrow="Get started"
          title="Create your account"
          description="Set up your workspace and start resolving issues faster."
        />

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="name"
              name="name"
              label="Full name"
              placeholder="Jane Smith"
              autoComplete="name"
              icon={<UserIcon />}
              required
            />
            <FormField
              id="company"
              name="company"
              label="Company"
              placeholder="Acme Inc."
              autoComplete="organization"
              icon={<BuildingIcon />}
              required
            />
          </div>

          <FormField
            id="email"
            name="email"
            type="email"
            label="Work email"
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
            placeholder="Create a secure password"
            autoComplete="new-password"
            icon={<LockIcon />}
            hint="Use at least 8 characters."
            minLength={8}
            required
          />

          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            <input
              className="mt-0.5 size-4 shrink-0 accent-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:accent-emerald-500 dark:focus-visible:ring-offset-zinc-900"
              type="checkbox"
              required
            />
            <span>
              I agree to the{' '}
              <a
                className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                href="#terms"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                href="#privacy"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <SubmitButton icon={<ArrowRightIcon />}>Create account</SubmitButton>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{' '}
          <Link
            className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default SignupPage;
