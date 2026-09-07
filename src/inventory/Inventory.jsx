import { useMemo, useState } from "react";
import { inventory, materialMovements } from "./inventoryData";

function getStatusStyle(status) {
  if (status === "Low Stock") {
    return "bg-red-50 text-red-700";
  }

  return "bg-green-50 text-green-700";
}

function getMovementStyle(type) {
  if (type === "Received") {
    return "bg-green-50 text-green-700";
  }

  return "bg-blue-50 text-blue-700";
}

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [siteFilter, setSiteFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const sites = [...new Set(inventory.map((item) => item.site))];

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch =
        item.material.toLowerCase().includes(search.toLowerCase()) ||
        item.project.toLowerCase().includes(search.toLowerCase()) ||
        item.site.toLowerCase().includes(search.toLowerCase());

      const matchesSite = siteFilter === "All" || item.site === siteFilter;

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesSite && matchesStatus;
    });
  }, [search, siteFilter, statusFilter]);

  const totalMaterials = inventory.length;

  const lowStock = inventory.filter(
    (item) => item.status === "Low Stock",
  ).length;

  const availableStock = inventory.filter(
    (item) => item.status === "Available",
  ).length;

  const totalSites = sites.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Inventory</h1>

          <p className="mt-1 text-sm text-slate-500">
            Track construction materials across all project sites.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
        >
          + Add Material
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Material Records</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {totalMaterials}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Low Stock</p>

          <p className="mt-2 text-2xl font-bold text-red-600">{lowStock}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Available Stock</p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {availableStock}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Active Sites</p>

          <p className="mt-2 text-2xl font-bold text-amber-600">{totalSites}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search material, project or site..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-amber-400"
          />

          <select
            value={siteFilter}
            onChange={(e) => setSiteFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Sites</option>

            {sites.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Low Stock">Low Stock</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">
            Materials Across Sites
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {filteredInventory.length} material records
          </p>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">Material</th>
                <th className="px-5 py-3">Project</th>
                <th className="px-5 py-3">Site</th>
                <th className="px-5 py-3">Quantity</th>
                <th className="px-5 py-3">Minimum</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Updated</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="transition hover:bg-slate-50">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">
                      {item.material}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.category}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {item.project}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {item.site}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-semibold text-slate-900">
                      {item.quantity.toLocaleString()}
                    </span>

                    <span className="ml-1 text-xs text-slate-500">
                      {item.unit}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {item.minimumStock.toLocaleString()} {item.unit}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {item.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="divide-y divide-slate-100 lg:hidden">
          {filteredInventory.map((item) => (
            <div key={item.id} className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.material}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">{item.project}</p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                    item.status,
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-slate-400">Site</p>

                  <p className="mt-1 font-medium text-slate-700">{item.site}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Quantity</p>

                  <p className="mt-1 font-medium text-slate-700">
                    {item.quantity.toLocaleString()} {item.unit}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Minimum Stock</p>

                  <p className="mt-1 font-medium text-slate-700">
                    {item.minimumStock.toLocaleString()} {item.unit}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Updated</p>

                  <p className="mt-1 font-medium text-slate-700">
                    {item.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredInventory.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="font-medium text-slate-700">No materials found</p>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* Recent Movements */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">
            Recent Material Movements
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest material received and issued at sites.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {materialMovements.map((movement) => (
            <div
              key={movement.id}
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-800">
                  {movement.material}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {movement.site} • {movement.date}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getMovementStyle(
                    movement.type,
                  )}`}
                >
                  {movement.type}
                </span>

                <span className="text-sm font-semibold text-slate-700">
                  {movement.quantity.toLocaleString()} {movement.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
