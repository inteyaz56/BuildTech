import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { tasks } from "./taskData";

function getStatusStyle(status) {
  const styles = {
    "In Progress": "bg-blue-50 text-blue-700",
    Delayed: "bg-red-50 text-red-700",
    Pending: "bg-slate-100 text-slate-600",
    Completed: "bg-green-50 text-green-700",
  };

  return styles[status] || "bg-slate-100 text-slate-600";
}

function getPriorityStyle(priority) {
  const styles = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-green-50 text-green-700",
  };

  return styles[priority] || "bg-slate-100 text-slate-600";
}

const Tasks = () => {
  const [search, setSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const projects = [...new Set(tasks.map((task) => task.project))];

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.project.toLowerCase().includes(search.toLowerCase()) ||
        task.assignedTo.toLowerCase().includes(search.toLowerCase());

      const matchesProject =
        projectFilter === "All" || task.project === projectFilter;

      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      return (
        matchesSearch && matchesProject && matchesStatus && matchesPriority
      );
    });
  }, [search, projectFilter, statusFilter, priorityFilter]);

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;
  const delayedTasks = tasks.filter((task) => task.status === "Delayed").length;
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High",
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>

          <p className="mt-1 text-sm text-slate-500">
            Track construction work, progress and responsibilities.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
        >
          + Add Task
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Tasks</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{totalTasks}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">In Progress</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">{activeTasks}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Delayed</p>
          <p className="mt-2 text-2xl font-bold text-red-600">{delayedTasks}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">High Priority</p>
          <p className="mt-2 text-2xl font-bold text-amber-600">
            {highPriorityTasks}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-amber-400"
          />

          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Projects</option>

            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Delayed">Delayed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Tasks */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">Construction Tasks</h2>

          <p className="mt-1 text-xs text-slate-500">
            {filteredTasks.length} task
            {filteredTasks.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Task</th>
                <th className="px-5 py-3 font-semibold">Project / Site</th>
                <th className="px-5 py-3 font-semibold">Assigned To</th>
                <th className="px-5 py-3 font-semibold">Progress</th>
                <th className="px-5 py-3 font-semibold">Priority</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="transition hover:bg-slate-50">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{task.title}</p>

                    <p className="mt-1 text-xs text-slate-500">
                      Due: {task.dueDate}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-700">
                      {task.project}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">{task.site}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-700">
                      {task.assignedTo}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Supervisor: {task.supervisor}
                    </p>
                  </td>

                  <td className="min-w-[150px] px-5 py-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-600">
                        {task.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getPriorityStyle(
                        task.priority,
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                        task.status,
                      )}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/tasks/${task.id}`}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-300 hover:text-amber-600"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-slate-100 lg:hidden">
          {filteredTasks.map((task) => (
            <div key={task.id} className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900">{task.title}</h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {task.project} • {task.site}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                    task.status,
                  )}`}
                >
                  {task.status}
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-semibold text-slate-700">
                    {task.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-400">Assigned To</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {task.assignedTo}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Due Date</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {task.dueDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getPriorityStyle(
                    task.priority,
                  )}`}
                >
                  {task.priority} Priority
                </span>

                <Link
                  to={`/tasks/${task.id}`}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-600"
                >
                  View Task
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="font-medium text-slate-700">No tasks found</p>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
