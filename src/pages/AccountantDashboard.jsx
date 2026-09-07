import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

function AccountantDashboard() {
  return (
    <SimpleDashboard
      eyebrow="FINANCE"
      title="Financial Overview"
      description="Monitor expenses, payments and financial activity."
      stats={dashboardData.accountant.stats}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Recent Expenses" action="View all">
          <div className="space-y-3">
            {[
              ["Green Valley", "Materials", "₹8.5 L"],
              ["Metro Heights", "Labour", "₹4.2 L"],
              ["Palm Residency", "Contractor", "₹6.5 L"],
              ["City Homes", "Transport", "₹1.8 L"],
            ].map(([project, category, amount]) => (
              <div
                key={`${project}-${category}`}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {project}
                  </p>

                  <p className="text-xs text-slate-400">{category}</p>
                </div>

                <p className="text-sm font-bold text-slate-800">{amount}</p>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Pending Payments" action="View payments">
          <div className="space-y-4">
            <Payment name="ABC Contractors" amount="₹4.2 L" />

            <Payment name="Sharma Cement" amount="₹2.8 L" />

            <Payment name="Modern Steel" amount="₹1.6 L" />
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
}

function Payment({ name, amount }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0">
      <p className="text-sm font-semibold text-slate-700">{name}</p>

      <p className="text-sm font-bold text-red-600">{amount}</p>
    </div>
  );
}

export default AccountantDashboard;
