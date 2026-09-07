import { useState } from "react";
import { projects } from "./projects";

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

export default function Projects() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase()) ||
      project.manager.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Projects</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and monitor all construction projects.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600">
          <span className="text-lg">+</span>
          Create Project
        </button>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search projects, location or manager..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          >
            <option value="All">All Status</option>
            <option value="On Track">On Track</option>
            <option value="At Risk">At Risk</option>
            <option value="Delayed">Delayed</option>
          </select>
        </div>
      </div>

      {/* Project Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-800">
            {filteredProjects.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-800">
            {projects.length}
          </span>{" "}
          projects
        </p>
      </div>

      {/* Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => {
            const remaining = project.budget - project.spent;

            return (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="border-b border-slate-100 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-semibold text-slate-900">
                        {project.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        📍 {project.location}
                      </p>
                    </div>

                    <span
                      className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusStyle(
                        project.status,
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      Project Progress
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  {/* Financial Information */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-400">Total Budget</p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {formatCurrency(project.budget)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Amount Spent</p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {formatCurrency(project.spent)}
                      </p>
                    </div>
                  </div>

                  {/* Remaining */}
                  <div className="mt-4 rounded-lg bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Remaining Budget
                      </span>

                      <span
                        className={`text-sm font-semibold ${
                          remaining < 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {formatCurrency(Math.abs(remaining))}
                        {remaining < 0 && " Over"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-4">
                  <div>
                    <p className="text-xs text-slate-400">Project Manager</p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {project.manager}
                    </p>
                  </div>

                  <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-300 hover:text-amber-600">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="text-4xl">🏗️</div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            No projects found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or status filter.
          </p>
        </div>
      )}
    </div>
  );
}
