import type { ReactNode } from 'react';

import AppSidebar from '../components/layout/AppSidebar';

type DashboardLayoutProps = {
  children?: ReactNode;
  title: string;
};

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => (
  <div className="flex h-screen min-h-0 overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50">
    <AppSidebar />

    <div className="flex min-w-0 flex-1 flex-col">
      <header className="app-drag-region flex h-16 shrink-0 items-center border-b border-zinc-200 bg-white px-5 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6">
        <h1 className="text-base font-semibold tracking-tight">{title}</h1>
      </header>
      <main className="min-h-0 flex-1 overflow-auto p-5 sm:p-6">
        {children}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
