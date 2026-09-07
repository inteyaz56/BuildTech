import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

function ContractorDashboard() {
  return (
    <SimpleDashboard
      eyebrow="CONTRACTOR PORTAL"
      title="My Work"
      description="Track your projects, assigned work and payments."
      stats={dashboardData.contractor.stats}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Assigned Work" action="View all">
          <div className="space-y-3">
            <Work title="Brickwork — Green Valley" progress={75} />

            <Work title="Plumbing — Metro Heights" progress={45} />

            <Work title="Painting — Palm Residency" progress={25} />
          </div>
        </DashboardCard>

        <DashboardCard title="Payment Summary">
          <div className="space-y-5">
            <Summary title="Total Contract" value="₹28 L" />

            <Summary title="Paid" value="₹19.5 L" />

            <Summary title="Outstanding" value="₹8.5 L" danger />
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
}

function Work({ title, progress }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex justify-between">
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="text-xs font-bold text-slate-500">{progress}%</p>
      </div>

      <div className="mt-3 h-2 rounded-full bg-white">
        <div
          className="h-2 rounded-full bg-amber-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function Summary({ title, value, danger }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0">
      <p className="text-sm text-slate-500">{title}</p>

      <p
        className={`text-lg font-bold ${
          danger ? "text-red-600" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default ContractorDashboard;
