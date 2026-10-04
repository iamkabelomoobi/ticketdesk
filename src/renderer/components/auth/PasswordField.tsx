import { useState } from 'react';

import FormField from './FormField';
import type { FormFieldProps } from './FormField';

type PasswordFieldProps = Omit<FormFieldProps, 'endAdornment'>;

const PasswordField = (props: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <FormField
      {...props}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <button
          className="grid size-8 place-items-center rounded-md text-zinc-400 transition-colors hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:text-zinc-200"
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
    />
  );
};

const EyeIcon = () => (
  <svg
    className="size-4 fill-none stroke-current stroke-[1.8]"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M2.7 12s3.4-5.4 9.3-5.4S21.3 12 21.3 12 17.9 17.4 12 17.4 2.7 12 2.7 12Z" />
    <circle cx="12" cy="12" r="2.4" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    className="size-4 fill-none stroke-current stroke-[1.8]"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="m3 3 18 18M10.6 6.8c.5-.1.9-.2 1.4-.2 5.9 0 9.3 5.4 9.3 5.4a16 16 0 0 1-2.3 2.8M6.2 7.8A15.7 15.7 0 0 0 2.7 12s3.4 5.4 9.3 5.4c1.4 0 2.7-.3 3.8-.8M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
);

export default PasswordField;
