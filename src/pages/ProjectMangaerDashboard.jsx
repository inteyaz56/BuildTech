import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

const ProjectManagerDashboard = () => {
  return (
    <SimpleDashboard
      eyebrow="PROJECT MANAGEMENT"
      title="Project Overview"
      description="Track your projects, tasks and site issues."
      stats={dashboardData.project_manager.stats}
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <DashboardCard title="Project Progress" action="View projects">
          <div className="space-y-5">
            <Project
              name="Green Valley Residency"
              progress={67}
              status="On Track"
            />

            <Project name="Metro Heights" progress={42} status="Delayed" />

            <Project name="Palm Residency" progress={31} status="At Risk" />
          </div>
        </DashboardCard>

        <DashboardCard title="Pending Tasks" action="View tasks">
          <div className="space-y-3">
            <Task
              title="Complete brickwork"
              project="Green Valley"
              priority="High"
            />

            <Task
              title="Electrical installation"
              project="Metro Heights"
              priority="Medium"
            />

            <Task
              title="Plumbing inspection"
              project="Palm Residency"
              priority="High"
            />
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
};

function Project({ name, progress, status }) {
  const statusStyle =
    status === "On Track"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Delayed"
        ? "bg-red-50 text-red-700"
        : "bg-amber-50 text-amber-700";

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">{name}</p>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle}`}
        >
          {status}
        </span>
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-amber-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-1 text-right text-xs text-slate-400">
        {progress}% complete
      </p>
    </div>
  );
}

function Task({ title, project, priority }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-xs text-slate-400">{project}</p>
      </div>

      <span
        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
          priority === "High"
            ? "bg-red-50 text-red-600"
            : "bg-amber-50 text-amber-700"
        }`}
      >
        {priority}
      </span>
    </div>
  );
}

export default ProjectManagerDashboard;
