import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

const AuthCard = ({ children, className }: AuthCardProps) => (
  <section
    className={cn(
      'w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-lg shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 sm:p-8',
      className,
    )}
  >
    {children}
  </section>
);

export default AuthCard;
