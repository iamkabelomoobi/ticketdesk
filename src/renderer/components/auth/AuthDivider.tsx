type AuthDividerProps = {
  label?: string;
};

const AuthDivider = ({ label = 'or' }: AuthDividerProps) => (
  <div className="my-6 flex items-center gap-4" role="separator">
    <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
      {label}
    </span>
    <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
  </div>
);

export default AuthDivider;
