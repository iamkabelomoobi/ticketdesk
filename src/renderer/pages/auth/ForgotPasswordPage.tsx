import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthCard from '../../components/auth/AuthCard';
import AuthDivider from '../../components/auth/AuthDivider';
import AuthHeader from '../../components/auth/AuthHeader';
import FormField from '../../components/auth/FormField';
import SubmitButton from '../../components/auth/SubmitButton';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, EmailIcon } from '../../components/ui/Icons';
import AuthLayout from '../../layouts/AuthLayout';

const ForgotPasswordPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <AuthCard className="mx-auto max-w-md">
        {submitted ? (
          <div>
            <span className="mb-5 grid size-11 place-items-center rounded-lg bg-emerald-100 text-lg font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
              ✓
            </span>
            <AuthHeader
              eyebrow="Check your inbox"
              title="Reset link sent"
              description="If an account exists for that email, you'll receive password reset instructions shortly."
            />
            <Button fullWidth type="button" onClick={() => setSubmitted(false)}>
              Send again
            </Button>
          </div>
        ) : (
          <>
            <AuthHeader
              eyebrow="Password help"
              title="Forgot your password?"
              description="Enter the email linked to your account and we'll send you a secure reset link."
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
              <SubmitButton icon={<ArrowRightIcon />}>
                Send reset link
              </SubmitButton>
            </form>
          </>
        )}

        <AuthDivider />

        <p className="text-center text-sm">
          <Link
            className="font-semibold text-emerald-600 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            to="/login"
          >
            ←&nbsp;&nbsp; Back to sign in
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
