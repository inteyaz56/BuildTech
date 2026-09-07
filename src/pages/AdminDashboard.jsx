import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

function AdminDashboard() {
  return (
    <SimpleDashboard
      eyebrow="ADMINISTRATION"
      title="System Overview"
      description="Manage users, roles and company settings."
      stats={dashboardData.admin.stats}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Recent Users" action="View all">
          <div className="space-y-4">
            {[
              ["Amit Sharma", "Project Manager"],
              ["Vikash Singh", "Site Manager"],
              ["Neha Verma", "Accountant"],
              ["Rahul Mehta", "Procurement Manager"],
            ].map(([name, role]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {name}
                    </p>

                    <p className="text-xs text-slate-500">{role}</p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Active
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="System Activity" action="View logs">
          <div className="space-y-5">
            {[
              ["Amit created a project", "10 min ago"],
              ["Neha added an expense", "32 min ago"],
              ["Rahul approved a PO", "1 hour ago"],
              ["Vikash submitted a site report", "2 hours ago"],
            ].map(([activity, time]) => (
              <div key={activity} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500" />

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {activity}
                  </p>

                  <p className="text-xs text-slate-400">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
}

export default AdminDashboard;
