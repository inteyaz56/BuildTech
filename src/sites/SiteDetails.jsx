import { Link, useParams } from "react-router-dom";
import { sites } from "./siteData";

function getStatusStyle(status) {
  switch (status) {
    case "Active":
      return "bg-green-50 text-green-700 border-green-200";

    case "At Risk":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "Delayed":
      return "bg-red-50 text-red-700 border-red-200";

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

const SiteDetails = () => {
  const { id } = useParams();

  const site = sites.find((site) => site.id === Number(id));

  if (!site) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-center">
          <div className="text-5xl">🏗️</div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            Site Not Found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            The site you are looking for does not exist.
          </p>

          <Link
            to="/sites"
            className="mt-5 inline-flex rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Back to Sites
          </Link>
        </div>
      </div>
    );
  }

  const presentWorkers = site.workers.filter(
    (worker) => worker.status === "Present",
  ).length;

  const absentWorkers = site.workers.filter(
    (worker) => worker.status === "Absent",
  ).length;

  return (
    <div className="space-y-6">
      {/* Back */}

      <Link
        to="/sites"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-amber-600"
      >
        <span>←</span>
        Back to Sites
      </Link>

      {/* Site Header */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">{site.name}</h1>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                  site.status,
                )}`}
              >
                {site.status}
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-amber-600">
              {site.project}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>📍 {site.location}</span>

              <span>
                👤 Site Manager:{" "}
                <strong className="font-medium text-slate-700">
                  {site.manager}
                </strong>
              </span>

              <span>
                📅 Started:{" "}
                <strong className="font-medium text-slate-700">
                  {site.startDate}
                </strong>
              </span>
            </div>
          </div>

          <button className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-600">
            Daily Report
          </button>
        </div>

        {/* Progress */}

        <div className="border-t border-slate-100 px-6 py-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              Overall Site Progress
            </span>

            <span className="text-lg font-bold text-slate-900">
              {site.progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{
                width: `${site.progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Overview Cards */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Workers */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Workers Today</p>

            <span className="rounded-lg bg-blue-50 px-2.5 py-2 text-lg">
              👷
            </span>
          </div>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            {site.workersToday}
          </p>

          <p className="mt-1 text-xs text-green-600">
            Workforce currently on site
          </p>
        </div>

        {/* Progress */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Site Progress</p>

            <span className="rounded-lg bg-amber-50 px-2.5 py-2 text-lg">
              📊
            </span>
          </div>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            {site.progress}%
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Overall construction progress
          </p>
        </div>

        {/* Materials */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Materials</p>

            <span className="rounded-lg bg-purple-50 px-2.5 py-2 text-lg">
              🧱
            </span>
          </div>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            {site.materials}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Materials tracked at site
          </p>
        </div>

        {/* Issues */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Open Issues</p>

            <span className="rounded-lg bg-red-50 px-2.5 py-2 text-lg">⚠</span>
          </div>

          <p className="mt-3 text-2xl font-bold text-red-600">
            {site.openIssues}
          </p>

          <p className="mt-1 text-xs text-red-500">Require attention</p>
        </div>
      </div>

      {/* Today's Work + Attendance */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Today's Work */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">Today's Work</h2>

            <p className="mt-1 text-sm text-slate-500">
              Work currently planned for this site.
            </p>
          </div>

          <div className="p-5">
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                Main Activity
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {site.workToday}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                  👷 {site.workersToday} Workers
                </span>

                <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                  📍 {site.location}
                </span>

                <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                  📊 {site.progress}% Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Summary */}

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-slate-900">Today's Attendance</h2>

            <p className="mt-1 text-sm text-slate-500">
              Workforce attendance summary.
            </p>
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between rounded-lg bg-green-50 p-4">
              <div>
                <p className="text-xs text-green-600">Present</p>

                <p className="mt-1 text-xl font-bold text-green-700">
                  {presentWorkers}
                </p>
              </div>

              <span className="text-xl">✓</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-red-50 p-4">
              <div>
                <p className="text-xs text-red-600">Absent</p>

                <p className="mt-1 text-xl font-bold text-red-700">
                  {absentWorkers}
                </p>
              </div>

              <span className="text-xl">✕</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
              <div>
                <p className="text-xs text-slate-500">Total Registered</p>

                <p className="mt-1 text-xl font-bold text-slate-800">
                  {site.workers.length}
                </p>
              </div>

              <span className="text-xl">👷</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="font-semibold text-slate-900">Site Tasks</h2>

          <p className="mt-1 text-sm text-slate-500">
            Track today's construction activities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Task
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assigned To
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Progress
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {site.tasks.map((task, index) => (
                <tr
                  key={index}
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
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-amber-500"
                          style={{
                            width: `${task.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-semibold text-slate-700">
                        {task.progress}%
                      </span>
                    </div>
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
            <h2 className="font-semibold text-slate-900">Materials at Site</h2>

            <p className="mt-1 text-sm text-slate-500">
              Current material stock available at this site.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {site.materialsList.map((material, index) => (
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
              Problems that require site-level attention.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {site.issues.map((issue, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 text-red-500">⚠</span>

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

      {/* Bottom Action */}

      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">Daily Site Reporting</h3>

          <p className="mt-1 text-sm text-slate-500">
            Record today's progress, workforce and site activities.
          </p>
        </div>

        <button className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600">
          Create Daily Report
        </button>
      </div>
    </div>
  );
};

export default SiteDetails;
