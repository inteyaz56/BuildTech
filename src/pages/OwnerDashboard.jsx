import StatCard from "../components/StatCard";

function OwnerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <p className="text-sm font-medium text-amber-600">OWNER OVERVIEW</p>

        <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
          Business Overview
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening across your construction business.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Active Projects"
          value="12"
          description="from last month"
          trend="+2"
          icon="🏗️"
        />

        <StatCard
          title="On Track"
          value="8"
          description="projects performing well"
          trend="+1"
          icon="✓"
        />

        <StatCard
          title="Delayed"
          value="2"
          description="need attention"
          icon="⚠️"
        />

        <StatCard
          title="Total Expenses"
          value="₹4.8 Cr"
          description="this financial year"
          trend="+8.4%"
          icon="₹"
        />
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Project Health */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">Project Health</h2>

              <p className="mt-1 text-sm text-slate-500">
                Current status of your major projects
              </p>
            </div>

            <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
              View all
            </button>
          </div>

          <div className="mt-6 space-y-5">
            <Project
              name="Green Valley Residency"
              location="Mohali"
              progress={67}
              status="On Track"
              statusClass="bg-emerald-50 text-emerald-700"
            />

            <Project
              name="Metro Heights"
              location="Chandigarh"
              progress={42}
              status="Delayed"
              statusClass="bg-red-50 text-red-700"
            />

            <Project
              name="Palm Residency"
              location="Panchkula"
              progress={31}
              status="At Risk"
              statusClass="bg-amber-50 text-amber-700"
            />
          </div>
        </div>

        {/* Attention */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-slate-900">Attention Required</h2>

          <p className="mt-1 text-sm text-slate-500">
            Items that need your attention
          </p>

          <div className="mt-5 space-y-4">
            <Attention
              color="red"
              title="Metro Heights"
              description="8 days behind schedule"
            />

            <Attention
              color="amber"
              title="Green Valley"
              description="Steel stock is low"
            />

            <Attention
              color="red"
              title="Palm Residency"
              description="₹4.2L payment overdue"
            />

            <Attention
              color="amber"
              title="City Homes"
              description="Material delivery delayed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Project({ name, location, progress, status, statusClass }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">{name}</p>

          <p className="text-xs text-slate-400">{location}</p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
          >
            {status}
          </span>

          <span className="text-sm font-bold text-slate-700">{progress}%</span>
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-amber-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function Attention({ color, title, description }) {
  const styles = {
    red: "bg-red-50 border-red-100",
    amber: "bg-amber-50 border-amber-100",
  };

  const dots = {
    red: "bg-red-500",
    amber: "bg-amber-500",
  };

  return (
    <div className={`rounded-xl border p-4 ${styles[color]}`}>
      <div className="flex gap-3">
        <div
          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${dots[color]}`}
        />

        <div>
          <p className="text-sm font-semibold text-slate-800">{title}</p>

          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;
