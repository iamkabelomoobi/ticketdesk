import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/cn';

export type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  endAdornment?: ReactNode;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  label: string;
  labelAction?: ReactNode;
};

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      className,
      endAdornment,
      error,
      hint,
      icon,
      id,
      label,
      labelAction,
      ...props
    },
    ref,
  ) => {
    const messageId = error || hint ? `${id}-message` : undefined;

    return (
      <div className={cn('min-w-0', className)}>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label
            className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            htmlFor={id}
          >
            {label}
          </label>
          {labelAction ? (
            <span className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
              {labelAction}
            </span>
          ) : null}
        </div>

        <div className="relative flex items-center">
          {icon ? (
            <span className="pointer-events-none absolute left-3.5 grid size-4 place-items-center text-zinc-400 [&_svg]:size-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8]">
              {icon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={id}
            aria-describedby={messageId}
            aria-invalid={Boolean(error)}
            className={cn(
              'h-11 w-full rounded-lg border bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:hover:border-zinc-600 dark:disabled:bg-zinc-900',
              Boolean(icon) && 'pl-10',
              Boolean(endAdornment) && 'pr-10',
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500'
                : 'border-zinc-200 dark:border-zinc-700',
            )}
            {...props}
          />
          {endAdornment ? (
            <span className="absolute right-3 grid size-5 place-items-center">
              {endAdornment}
            </span>
          ) : null}
        </div>

        {error || hint ? (
          <p
            className={cn(
              'mt-1.5 text-xs',
              error
                ? 'text-red-600 dark:text-red-400'
                : 'text-zinc-500 dark:text-zinc-400',
            )}
            id={messageId}
            role={error ? 'alert' : undefined}
          >
            {error || hint}
          </p>
        ) : null}
      </div>
    );
  },
);

FormField.displayName = 'FormField';

export default FormField;
