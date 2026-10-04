import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  children,
  className = '',
  fullWidth = false,
  icon,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary:
      'border-emerald-600 bg-emerald-600 text-white shadow-sm hover:border-emerald-700 hover:bg-emerald-700 dark:border-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:border-emerald-400 dark:hover:bg-emerald-400',
    secondary:
      'border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800',
  };

  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-zinc-950',
    variantClasses[variant],
    fullWidth && 'w-full',
    className,
  );

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {icon ? (
        <span className="grid size-4 place-items-center">{icon}</span>
      ) : null}
    </button>
  );
};

export default Button;
