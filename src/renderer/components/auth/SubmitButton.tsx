import type { ButtonHTMLAttributes, ReactNode } from 'react';

import Button from '../ui/Button';

type SubmitButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  children: ReactNode;
  icon?: ReactNode;
};

const SubmitButton = ({ children, icon, ...props }: SubmitButtonProps) => (
  <Button fullWidth type="submit" icon={icon} {...props}>
    {children}
  </Button>
);

export default SubmitButton;
