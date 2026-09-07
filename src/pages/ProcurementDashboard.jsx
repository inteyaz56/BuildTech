import SimpleDashboard from "../components/SimpleDashboard";
import DashboardCard from "../components/DashboardCard";
import { dashboardData } from "../data/dashboardData";

function ProcurementDashboard() {
  return (
    <SimpleDashboard
      eyebrow="PROCUREMENT"
      title="Procurement Overview"
      description="Manage material requests, purchase orders and deliveries."
      stats={dashboardData.procurement_manager.stats}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Material Requests" action="View requests">
          <div className="space-y-3">
            <Request
              material="Cement"
              quantity="500 Bags"
              project="Green Valley"
            />

            <Request
              material="Steel"
              quantity="10 Tons"
              project="Metro Heights"
            />

            <Request
              material="Bricks"
              quantity="5,000 Pieces"
              project="Palm Residency"
            />
          </div>
        </DashboardCard>

        <DashboardCard title="Upcoming Deliveries" action="View deliveries">
          <div className="space-y-3">
            <Delivery
              vendor="Sharma Cement"
              material="Cement"
              date="Tomorrow"
            />

            <Delivery vendor="Modern Steel" material="Steel" date="10 Sep" />

            <Delivery vendor="Punjab Bricks" material="Bricks" date="12 Sep" />
          </div>
        </DashboardCard>
      </div>
    </SimpleDashboard>
  );
}

function Request({ material, quantity, project }) {
  return (
    <div className="rounded-xl border border-slate-100 p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">{material}</p>

          <p className="text-xs text-slate-400">{project}</p>
        </div>

        <span className="text-sm font-bold text-slate-700">{quantity}</span>
      </div>

      <div className="mt-3">
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
          Pending Approval
        </span>
      </div>
    </div>
  );
}

function Delivery({ vendor, material, date }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-800">{material}</p>

        <p className="text-xs text-slate-400">{vendor}</p>
      </div>

      <span className="text-xs font-semibold text-emerald-600">{date}</span>
    </div>
  );
}

export default ProcurementDashboard;
