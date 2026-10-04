import type { ReactNode } from 'react';

import AuthBrand from '../components/auth/AuthBrand';
import authBackground from '../assets/auth-office-background.png';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center overflow-x-hidden bg-zinc-50 px-4 py-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-6">
      <img
        className="fixed inset-0 -z-20 size-full object-cover object-center"
        src={authBackground}
        alt=""
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 bg-zinc-50/85 dark:bg-zinc-950/80"
        aria-hidden="true"
      />

      <section className="mt-auto mb-5" aria-label="About TicketDesk">
        <AuthBrand />
      </section>

      <section className="mb-auto w-full max-w-lg">
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
};

export default AuthLayout;
