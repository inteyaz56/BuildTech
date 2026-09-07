import { useState } from "react";
import { Link } from "react-router-dom";
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

const Sites = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.project.toLowerCase().includes(search.toLowerCase()) ||
      site.location.toLowerCase().includes(search.toLowerCase()) ||
      site.manager.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || site.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Construction Sites
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor daily operations across all construction sites.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
          <span className="text-lg">+</span>
          Add Site
        </button>
      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Sites</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {sites.length}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Active construction locations
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Workers Today</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {sites.reduce((total, site) => total + site.workersToday, 0)}
          </p>

          <p className="mt-1 text-xs text-green-600">Workforce on site</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Average Progress</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {Math.round(
              sites.reduce((total, site) => total + site.progress, 0) /
                sites.length,
            )}
            %
          </p>

          <p className="mt-1 text-xs text-slate-400">Across all sites</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Open Issues</p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {sites.reduce((total, site) => total + site.openIssues, 0)}
          </p>

          <p className="mt-1 text-xs text-red-500">Require attention</p>
        </div>
      </div>

      {/* Filters */}

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search sites, projects, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="At Risk">At Risk</option>
            <option value="Delayed">Delayed</option>
          </select>
        </div>
      </div>

      {/* Count */}

      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-800">
          {filteredSites.length}
        </span>{" "}
        of <span className="font-semibold text-slate-800">{sites.length}</span>{" "}
        sites
      </p>

      {/* Site Cards */}

      {filteredSites.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Header */}

              <div className="border-b border-slate-100 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {site.name}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-amber-600">
                      {site.project}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      📍 {site.location}
                    </p>
                  </div>

                  <span
                    className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusStyle(
                      site.status,
                    )}`}
                  >
                    {site.status}
                  </span>
                </div>
              </div>

              {/* Progress */}

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Site Progress
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {site.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{
                      width: `${site.progress}%`,
                    }}
                  />
                </div>

                {/* Stats */}

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {site.workersToday}
                    </p>

                    <p className="text-xs text-slate-500">Workers</p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {site.materials}
                    </p>

                    <p className="text-xs text-slate-500">Materials</p>
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-center">
                    <p className="text-lg font-bold text-red-600">
                      {site.openIssues}
                    </p>

                    <p className="text-xs text-red-500">Issues</p>
                  </div>
                </div>

                {/* Today's Work */}

                <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">TODAY'S WORK</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {site.workToday}
                  </p>
                </div>
              </div>

              {/* Footer */}

              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-4">
                <div>
                  <p className="text-xs text-slate-400">Site Manager</p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {site.manager}
                  </p>
                </div>

                <Link
                  to={`/sites/${site.id}`}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-600"
                >
                  View Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="text-4xl">🏗️</div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            No sites found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or status filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default Sites;
