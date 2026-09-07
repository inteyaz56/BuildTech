function DashboardCard({ title, children, action }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-slate-900">{title}</h2>
        </div>

        {action && (
          <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
            {action}
          </button>
        )}
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

export default DashboardCard;
