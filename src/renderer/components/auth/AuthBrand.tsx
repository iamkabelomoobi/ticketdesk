const AuthBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-lg bg-emerald-600 text-xl font-bold text-white shadow-sm dark:bg-emerald-500 dark:text-zinc-950">
        T
      </span>
      <div>
        <span className="block text-lg leading-none font-bold tracking-tight text-zinc-950 dark:text-white">
          Ticket
          <span className="text-emerald-600 dark:text-emerald-400">Desk</span>
        </span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
          Support management
        </span>
      </div>
    </div>
  );
};

export default AuthBrand;
