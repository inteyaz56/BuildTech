import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

const SiteManagerDashboard = () => {
  return (
    <SimpleDashboard
      eyebrow="SITE OPERATIONS"
      title="Site Overview"
      description="Monitor today's work, workers, materials and issues."
      stats={dashboardData.site_manager.stats}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Today's Work" action="Daily report">
          <div className="space-y-3">
            <Work title="2nd Floor Brickwork" progress={80} />

            <Work title="Electrical Conduit" progress={60} />

            <Work title="Plumbing Installation" progress={45} />
          </div>
        </DashboardCard>

        <DashboardCard title="Site Issues" action="View issues">
          <div className="space-y-3">
            <Issue title="Cement delivery delayed" priority="High" />

            <Issue title="Scaffolding repair required" priority="Medium" />
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
};

function Work({ title, progress }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex justify-between">
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="text-xs font-semibold text-slate-500">{progress}%</p>
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

function Issue({ title, priority }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
      <div className="flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />

        <p className="text-sm font-medium text-slate-700">{title}</p>
      </div>

      <span className="text-xs font-semibold text-red-600">{priority}</span>
    </div>
  );
}

export default SiteManagerDashboard;
