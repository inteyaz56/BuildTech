import { Link, useParams } from "react-router-dom";
import { projects } from "./projectdata";

function formatCurrency(amount) {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }

  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }

  return `₹${amount.toLocaleString("en-IN")}`;
}

function getStatusStyle(status) {
  switch (status) {
    case "On Track":
      return "bg-green-50 text-green-700 border-green-200";

    case "Delayed":
      return "bg-red-50 text-red-700 border-red-200";

    case "At Risk":
      return "bg-amber-50 text-amber-700 border-amber-200";

    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
}

function getPriorityStyle(priority) {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-700";

    case "Medium":
      return "bg-amber-50 text-amber-700";

    case "Low":
      return "bg-green-50 text-green-700";

    default:
      return "bg-slate-50 text-slate-700";
  }
}

function getTaskStatusStyle(status) {
  switch (status) {
    case "Completed":
      return "bg-green-50 text-green-700";

    case "In Progress":
      return "bg-blue-50 text-blue-700";

    case "Delayed":
      return "bg-red-50 text-red-700";

    case "Pending":
      return "bg-slate-100 text-slate-600";

    default:
      return "bg-slate-50 text-slate-700";
  }
}

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  // Project not found
  if (!project) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-center">
          <div className="text-5xl">🏗️</div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            Project Not Found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="mt-5 inline-flex rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const remainingBudget = project.budget - project.spent;

  return (
    <div className="space-y-6">
      {/* Back Button */}

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-amber-600"
      >
        <span>←</span>
        Back to Projects
      </Link>

      {/* Project Header */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {project.name}
              </h1>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                  project.status,
                )}`}
              >
                {project.status}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>📍 {project.location}</span>

              <span>
                👤 Project Manager:{" "}
                <strong className="font-medium text-slate-700">
                  {project.manager}
                </strong>
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
              {project.description}
            </p>
          </div>

          <button className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-600">
            Edit Project
          </button>
        </div>

        {/* Progress */}

        <div className="border-t border-slate-100 px-6 py-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              Overall Project Progress
            </span>

            <span className="text-lg font-bold text-slate-900">
              {project.progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-amber-500 transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Budget */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Budget</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatCurrency(project.budget)}
          </p>

          <p className="mt-1 text-xs text-slate-400">Approved project budget</p>
        </div>

        {/* Spent */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Amount Spent</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatCurrency(project.spent)}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Current project expenses
          </p>
        </div>

        {/* Remaining */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            {remainingBudget >= 0 ? "Remaining Budget" : "Budget Overrun"}
          </p>

          <p
            className={`mt-2 text-2xl font-bold ${
              remainingBudget >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {formatCurrency(Math.abs(remainingBudget))}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {remainingBudget >= 0 ? "Available budget" : "Amount above budget"}
          </p>
        </div>

        {/* Units */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Units</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {project.totalUnits}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {project.projectType} development
          </p>
        </div>
      </div>

      {/* Project Information + Team */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Project Information */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">
              Project Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Basic information about this construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs text-slate-400">Project Type</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.projectType}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.location}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Start Date</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.startDate}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Expected Completion</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.expectedEndDate}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Project Manager</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.manager}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Total Units</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.totalUnits}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">Project Team</h2>

            <p className="mt-1 text-sm text-slate-500">
              People assigned to this project.
            </p>
          </div>

          <div className="space-y-4 p-5">
            {project.team.map((member, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  {member.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {member.name}
                  </p>

                  <p className="text-xs text-slate-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tasks */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-slate-900">Project Tasks</h2>

            <p className="mt-1 text-sm text-slate-500">
              Track work assigned to the project team.
            </p>
          </div>

          <button className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">
            + Add Task
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Task
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assigned To
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Priority
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {project.tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-800">
                      {task.title}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {task.assignedTo}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${getPriorityStyle(
                        task.priority,
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${getTaskStatusStyle(
                        task.status,
                      )}`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Materials + Issues */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Materials */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">Materials</h2>

            <p className="mt-1 text-sm text-slate-500">
              Current material availability at the project.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {project.materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {material.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {material.quantity.toLocaleString("en-IN")} {material.unit}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    material.status === "Low Stock"
                      ? "bg-red-50 text-red-700"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {material.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Issues */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">Open Issues</h2>

            <p className="mt-1 text-sm text-slate-500">
              Issues requiring attention.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {project.issues.map((issue, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 p-5"
              >
                <div className="flex gap-3">
                  <div className="mt-0.5 text-red-500">⚠</div>

                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {issue.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Status: {issue.status}
                    </p>
                  </div>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${getPriorityStyle(
                    issue.priority,
                  )}`}
                >
                  {issue.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expenses */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="font-semibold text-slate-900">Recent Expenses</h2>

          <p className="mt-1 text-sm text-slate-500">
            Recent expenses recorded against this project.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Category
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Date
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {project.expenses.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-5 py-4 text-sm font-medium text-slate-800">
                    {expense.category}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {expense.date}
                  </td>

                  <td className="px-5 py-4 text-right text-sm font-semibold text-slate-900">
                    {formatCurrency(expense.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
