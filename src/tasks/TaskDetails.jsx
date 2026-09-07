import { Link, useParams } from "react-router-dom";
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
const TaskDetails = () => {
  const { id } = useParams();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
        <h2 className="text-xl font-bold text-slate-900">Task Not Found</h2>

        <p className="mt-2 text-sm text-slate-500">
          The task you're looking for doesn't exist.
        </p>

        <Link
          to="/tasks"
          className="mt-5 inline-block rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
        >
          Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        to="/tasks"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-amber-600"
      >
        ← Back to Tasks
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                  task.status,
                )}`}
              >
                {task.status}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                  task.priority,
                )}`}
              >
                {task.priority} Priority
              </span>
            </div>

            <h1 className="mt-3 text-2xl font-bold text-slate-900">
              {task.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              {task.project} • {task.site}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-600"
            >
              Edit Task
            </button>

            <button
              type="button"
              className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
            >
              Update Progress
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              Task Progress
            </span>

            <span className="text-lg font-bold text-slate-900">
              {task.progress}%
            </span>
          </div>

          <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Project
          </p>

          <p className="mt-2 font-semibold text-slate-900">{task.project}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Assigned To
          </p>

          <p className="mt-2 font-semibold text-slate-900">{task.assignedTo}</p>

          <p className="mt-1 text-xs text-slate-500">
            Supervisor: {task.supervisor}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Due Date
          </p>

          <p className="mt-2 font-semibold text-slate-900">{task.dueDate}</p>

          <p className="mt-1 text-xs text-slate-500">
            Started: {task.startDate}
          </p>
        </div>
      </div>

      {/* Description + Materials */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Task Description</h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {task.description}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Materials Required</h2>

          {task.materials.length > 0 ? (
            <div className="mt-4 space-y-3">
              {task.materials.map((material) => (
                <div
                  key={material.name}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {material.name}
                  </span>

                  <span className="text-sm text-slate-500">
                    {material.quantity} {material.unit}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              No specific materials required.
            </p>
          )}
        </div>
      </div>

      {/* Updates + Issues */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Activity Updates</h2>

          {task.updates.length > 0 ? (
            <div className="mt-5 space-y-5">
              {task.updates.map((update, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-slate-200 pl-5"
                >
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-amber-500" />

                  <p className="text-xs text-slate-400">{update.date}</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {update.person}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {update.message}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              No activity updates yet.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Issues</h2>

          {task.issues.length > 0 ? (
            <div className="mt-4 space-y-3">
              {task.issues.map((issue, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-red-100 bg-red-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-red-800">
                      {issue.title}
                    </p>

                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
                      {issue.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm font-medium text-green-700">
                No issues reported for this task.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
