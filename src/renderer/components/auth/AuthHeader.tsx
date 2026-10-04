type AuthHeaderProps = {
  description: string;
  eyebrow: string;
  title: string;
};

const AuthHeader = ({ description, eyebrow, title }: AuthHeaderProps) => (
  <header className="mb-6">
    <p className="mb-2 text-xs font-bold tracking-[0.16em] text-emerald-600 uppercase dark:text-emerald-400">
      {eyebrow}
    </p>
    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
      {title}
    </h1>
    <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
      {description}
    </p>
  </header>
);

export default AuthHeader;
