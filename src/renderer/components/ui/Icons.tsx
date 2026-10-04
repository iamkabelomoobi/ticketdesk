type IconProps = {
  className?: string;
};

const iconClass =
  'size-4 fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]';

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg
    className={`${iconClass} ${className ?? ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const EmailIcon = ({ className }: IconProps) => (
  <svg
    className={`${iconClass} ${className ?? ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const LockIcon = ({ className }: IconProps) => (
  <svg
    className={`${iconClass} ${className ?? ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const UserIcon = ({ className }: IconProps) => (
  <svg
    className={`${iconClass} ${className ?? ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export const BuildingIcon = ({ className }: IconProps) => (
  <svg
    className={`${iconClass} ${className ?? ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" />
    <path d="M8 7v1M8 12v1M8 17v1M16 12v1M16 17v1" />
  </svg>
);
