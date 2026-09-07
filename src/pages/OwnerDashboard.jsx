import { Link } from "react-router-dom";
import { projects } from "../projects/projectdata";
import { sites } from "../sites/siteData";
import { tasks } from "../tasks/taskData.js";
import { inventory } from "../inventory/inventoryData";
import { projectFinance } from "../finance/financeData";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getStatusStyle(status) {
  const styles = {
    "On Track": "bg-green-50 text-green-700",
    Active: "bg-green-50 text-green-700",
    "At Risk": "bg-amber-50 text-amber-700",
    Delayed: "bg-red-50 text-red-700",
    "Over Budget": "bg-red-50 text-red-700",
  };

  return styles[status] || "bg-slate-100 text-slate-600";
}

const OwnerDashboard = () => {
  const totalProjects = projects.length;

  const totalSites = sites.length;

  const workersToday = sites.reduce(
    (total, site) => total + site.workersToday,
    0,
  );

  const totalSpent = projectFinance.reduce(
    (total, project) => total + project.spent,
    0,
  );

  const totalBudget = projectFinance.reduce(
    (total, project) => total + project.budget,
    0,
  );

  const openIssues = sites.reduce((total, site) => total + site.openIssues, 0);

  const delayedTasks = tasks.filter((task) => task.status === "Delayed");

  const lowStockMaterials = inventory.filter(
    (item) => item.status === "Low Stock",
  );

  const projectsAtRisk = projects.filter(
    (project) => project.status === "Delayed" || project.status === "At Risk",
  );

  const overBudgetProjects = projectFinance.filter(
    (project) => project.spent > project.budget,
  );

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-amber-400">
              CONSTRUCTION CONTROL TOWER
            </p>

            <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Good Morning, Rajesh 👋
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Get a real-time view of your projects, sites, workforce, materials
              and financial performance.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-4">
            <p className="text-xs text-slate-400">Business Status</p>

            <p className="mt-1 text-lg font-semibold text-white">
              {projectsAtRisk.length > 0
                ? "Attention Required"
                : "Everything On Track"}
            </p>

            <p className="mt-1 text-xs text-amber-400">
              {projectsAtRisk.length} project
              {projectsAtRisk.length !== 1 ? "s" : ""} need attention
            </p>
          </div>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Projects</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {totalProjects}
          </p>

          <p className="mt-1 text-xs text-slate-400">Active projects</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Sites</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">{totalSites}</p>

          <p className="mt-1 text-xs text-slate-400">Construction sites</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Workers Today</p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {workersToday}
          </p>

          <p className="mt-1 text-xs text-slate-400">Across all sites</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Spent</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatCurrency(totalSpent)}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Of {formatCurrency(totalBudget)} budget
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Open Issues</p>

          <p className="mt-2 text-2xl font-bold text-red-600">{openIssues}</p>

          <p className="mt-1 text-xs text-slate-400">Across all sites</p>
        </div>
      </div>

      {/* Needs Attention */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Needs Your Attention
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Important items requiring management attention.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Project Alert */}
          <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                Project Alert
              </span>

              <span className="text-lg">⚠️</span>
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              {projectsAtRisk.length} Projects Need Attention
            </h3>

            <div className="mt-3 space-y-2">
              {projectsAtRisk.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="flex items-center justify-between rounded-lg bg-red-50 px-3 py-2 transition hover:bg-red-100"
                >
                  <span className="text-sm font-medium text-red-800">
                    {project.name}
                  </span>

                  <span className="text-xs font-semibold text-red-600">
                    {project.progress}%
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Inventory Alert */}
          <div className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                Inventory Alert
              </span>

              <span className="text-lg">📦</span>
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              {lowStockMaterials.length} Materials Low
            </h3>

            <div className="mt-3 space-y-2">
              {lowStockMaterials.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-amber-50 px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-amber-800">
                      {item.material}
                    </p>

                    <p className="text-xs text-amber-600">{item.site}</p>
                  </div>

                  <span className="text-xs font-semibold text-red-600">
                    {item.quantity} {item.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Finance Alert */}
          <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                Finance Alert
              </span>

              <span className="text-lg">💰</span>
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Budget Exception
            </h3>

            {overBudgetProjects.map((project) => (
              <div key={project.id} className="mt-3 rounded-lg bg-red-50 p-3">
                <p className="text-sm font-semibold text-red-800">
                  {project.project}
                </p>

                <p className="mt-1 text-xs text-red-600">
                  Spent {formatCurrency(project.spent)}
                </p>

                <p className="mt-1 text-xs font-semibold text-red-700">
                  Budget exceeded by{" "}
                  {formatCurrency(project.spent - project.budget)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Project Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current progress across your construction projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-amber-600">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {project.location}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Project Progress</span>

                  <span className="font-semibold text-slate-800">
                    {project.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-400">Budget</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatCurrency(project.budget)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Spent</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatCurrency(project.spent)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sites + Tasks */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Site Activity */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-semibold text-slate-900">Site Activity</h2>

              <p className="mt-1 text-xs text-slate-500">
                Today's site performance.
              </p>
            </div>

            <Link to="/sites" className="text-sm font-semibold text-amber-600">
              View All
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {sites.map((site) => (
              <Link
                key={site.id}
                to={`/sites/${site.id}`}
                className="block px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-800">{site.name}</p>

                    <p className="mt-1 text-xs text-slate-500">
                      {site.location}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                      site.status,
                    )}`}
                  >
                    {site.status}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>👷 {site.workersToday} workers</span>

                  <span>Progress {site.progress}%</span>

                  <span>⚠ {site.openIssues} issues</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tasks */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                Tasks Needing Attention
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Delayed construction work.
              </p>
            </div>

            <Link to="/tasks" className="text-sm font-semibold text-amber-600">
              View All
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {delayedTasks.map((task) => (
              <Link
                key={task.id}
                to={`/tasks/${task.id}`}
                className="block px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-800">{task.title}</p>

                    <p className="mt-1 text-xs text-slate-500">
                      {task.project} • {task.site}
                    </p>
                  </div>

                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                    Delayed
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Progress</span>

                    <span className="font-semibold text-slate-700">
                      {task.progress}%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-red-500"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Assigned to:{" "}
                  <span className="font-medium text-slate-700">
                    {task.assignedTo}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-amber-900">
              ConstructionOS Control Tower
            </h3>

            <p className="mt-1 text-sm text-amber-700">
              One place to monitor projects, sites, tasks, materials and
              financial performance.
            </p>
          </div>

          <Link
            to="/projects"
            className="w-fit rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
