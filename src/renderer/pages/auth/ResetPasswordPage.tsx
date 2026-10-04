import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthCard from '../../components/auth/AuthCard';
import AuthDivider from '../../components/auth/AuthDivider';
import AuthHeader from '../../components/auth/AuthHeader';
import PasswordField from '../../components/auth/PasswordField';
import SubmitButton from '../../components/auth/SubmitButton';
import { ArrowRightIcon, LockIcon } from '../../components/ui/Icons';
import AuthLayout from '../../layouts/AuthLayout';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <AuthLayout>
      <AuthCard className="mx-auto max-w-md">
        <AuthHeader
          eyebrow="Secure your account"
          title="Create a new password"
          description="Your new password must be different from previously used passwords."
        />

        <form className="space-y-5" onSubmit={handleSubmit}>
          <PasswordField
            id="password"
            name="password"
            type="password"
            label="New password"
            placeholder="Enter your new password"
            autoComplete="new-password"
            icon={<LockIcon />}
            hint="Use at least 8 characters."
            minLength={8}
            required
          />
          <PasswordField
            id="confirm-password"
            name="confirm-password"
            type="password"
            label="Confirm new password"
            placeholder="Re-enter your new password"
            autoComplete="new-password"
            icon={<LockIcon />}
            minLength={8}
            required
          />
          <SubmitButton icon={<ArrowRightIcon />}>Update password</SubmitButton>
        </form>

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

export default ResetPasswordPage;
