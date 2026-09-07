function StatCard({ title, value, description, icon, trend }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {trend && (
          <span className="text-xs font-semibold text-emerald-600">
            {trend}
          </span>
        )}

        <span className="text-xs text-slate-400">{description}</span>
      </div>
    </div>
  );
}

export default StatCard;
