import type { ReactNode } from 'react';

type NavItem = {
  icon: ReactNode;
  label: string;
};

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

const primaryItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: icon(
      <>
        <path d="M4 10.5 12 4l8 6.5V20H4Z" />
        <path d="M9 20v-6h6v6" />
      </>,
    ),
  },
  {
    label: 'Tickets',
    icon: icon(
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h5" />
      </>,
    ),
  },
  { label: 'New Ticket', icon: icon(<path d="M12 5v14M5 12h14" />) },
  {
    label: 'My Tickets',
    icon: icon(
      <>
        <path d="M5 8h14v11H5z" />
        <path d="m8 8 1.5-3h5L16 8M9 12h6" />
      </>,
    ),
  },
  {
    label: 'Categories',
    icon: icon(
      <>
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 3v6M16 3v6M8 13h3M14 13h2M8 17h2" />
      </>,
    ),
  },
  {
    label: 'Users',
    icon: icon(
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 4.8" />
      </>,
    ),
  },
  {
    label: 'Reports',
    icon: icon(
      <>
        <path d="M4 20V8l8-4 8 4v12Z" />
        <path d="M8 17v-5M12 17V9M16 17v-3" />
      </>,
    ),
  },
];

const secondaryItems: NavItem[] = [
  {
    label: 'Settings',
    icon: icon(
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19 13.5 1.2 1-.2 2.1-1.4.7-.8 1.3.1 1.6-1.9.9-1.2-1-1.5.3-.8 1.4h-2.1l-.8-1.4-1.5-.3-1.2 1-1.9-.9.1-1.6-.8-1.3-1.4-.7-.2-2.1 1.2-1v-1.6l-1.2-1 .2-2.1 1.4-.7.8-1.3-.1-1.6 1.9-.9 1.2 1 1.5-.3.8-1.4h2.1l.8 1.4 1.5.3 1.2-1 1.9.9-.1 1.6.8 1.3 1.4.7.2 2.1-1.2 1Z" />
      </>,
    ),
  },
  {
    label: 'Help & Support',
    icon: icon(
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9.8 9a2.3 2.3 0 1 1 3.2 2.1c-.8.4-1 1-1 1.9M12 16.5v.1" />
      </>,
    ),
  },
];

const navigationClass =
  'group flex min-h-9 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 max-sm:justify-center max-sm:px-0';

const AppSidebar = () => (
  <aside className="flex h-full w-56 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 max-sm:w-16">
    <div className="app-drag-region flex h-16 shrink-0 items-center gap-3 border-b border-zinc-200 px-4 dark:border-zinc-800 max-sm:justify-center max-sm:px-2">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-emerald-600 text-sm font-bold text-white dark:bg-emerald-500 dark:text-zinc-950">
        T
      </span>
      <div className="min-w-0 max-sm:hidden">
        <strong className="block truncate text-sm font-bold tracking-tight text-zinc-950 dark:text-white">
          TicketDesk
        </strong>
        <small className="block truncate text-[8px] font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-500">
          Support management
        </small>
      </div>
    </div>

    <nav
      className="app-no-drag min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4 max-sm:px-2"
      aria-label="Main navigation"
    >
      {primaryItems.map((item, index) => (
        <button
          className={`${navigationClass} ${
            index === 0
              ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-200'
              : ''
          }`}
          type="button"
          key={item.label}
          aria-current={index === 0 ? 'page' : undefined}
          title={item.label}
        >
          <span className="grid size-4 shrink-0 place-items-center [&_svg]:size-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
            {item.icon}
          </span>
          <span className="truncate max-sm:hidden">{item.label}</span>
        </button>
      ))}

      <div className="my-3 h-px bg-zinc-200 dark:bg-zinc-800" />

      {secondaryItems.map((item, index) => (
        <button
          className={navigationClass}
          type="button"
          key={item.label}
          title={item.label}
        >
          <span className="grid size-4 shrink-0 place-items-center [&_svg]:size-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
            {item.icon}
          </span>
          <span className="truncate max-sm:hidden">{item.label}</span>
          {index === 1 ? (
            <span className="ml-auto text-zinc-400 max-sm:hidden">⌄</span>
          ) : null}
        </button>
      ))}
    </nav>

    <button
      className="app-no-drag m-3 flex items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-zinc-800 max-sm:justify-center"
      type="button"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-600 text-[10px] font-bold text-white dark:bg-emerald-500 dark:text-zinc-950">
        KM
      </span>
      <span className="min-w-0 max-sm:hidden">
        <strong className="block truncate text-xs font-semibold text-zinc-900 dark:text-zinc-100">
          Kabelo Moobi
        </strong>
        <small className="mt-0.5 block truncate text-[10px] text-zinc-500 dark:text-zinc-500">
          Administrator
        </small>
      </span>
      <span className="ml-auto text-xs text-zinc-400 max-sm:hidden">⌄</span>
    </button>
  </aside>
);

export default AppSidebar;
