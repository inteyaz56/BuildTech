import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

const SupervisorDashboard = () => {
  return (
    <SimpleDashboard
      eyebrow="FIELD OPERATIONS"
      title="My Work"
      description="Manage assigned tasks, workers and daily progress."
      stats={dashboardData.supervisor.stats}
    >
      <DashboardCard title="Today's Tasks" action="View all">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            ["Brickwork — Block A", "In Progress"],
            ["Electrical — Block B", "Pending"],
            ["Plumbing — Block A", "Completed"],
            ["Painting — Block C", "In Progress"],
          ].map(([task, status]) => (
            <div key={task} className="rounded-xl border border-slate-100 p-4">
              <p className="text-sm font-semibold text-slate-800">{task}</p>

              <span
                className={`mt-3 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
                  status === "Completed"
                    ? "bg-emerald-50 text-emerald-700"
                    : status === "In Progress"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-slate-100 text-slate-600"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </DashboardCard>
    </SimpleDashboard>
  );
};

export default SupervisorDashboard;
