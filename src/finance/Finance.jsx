import { useMemo, useState } from "react";
import { projectFinance, expenses, expenseSummary } from "./financeData";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getProjectStatusStyle(status) {
  const styles = {
    "On Track": "bg-green-50 text-green-700",
    "At Risk": "bg-amber-50 text-amber-700",
    "Over Budget": "bg-red-50 text-red-700",
  };

  return styles[status] || "bg-slate-100 text-slate-600";
}

function getPaymentStatusStyle(status) {
  if (status === "Paid") {
    return "bg-green-50 text-green-700";
  }

  return "bg-amber-50 text-amber-700";
}

function getCategoryStyle(category) {
  const styles = {
    Materials: "bg-blue-50 text-blue-700",
    Labour: "bg-purple-50 text-purple-700",
    Contractor: "bg-amber-50 text-amber-700",
    Equipment: "bg-slate-100 text-slate-700",
  };

  return styles[category] || "bg-slate-100 text-slate-600";
}

const Finance = () => {
  const [projectFilter, setProjectFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const totalBudget = projectFinance.reduce(
    (total, project) => total + project.budget,
    0,
  );

  const totalSpent = projectFinance.reduce(
    (total, project) => total + project.spent,
    0,
  );

  const remainingBudget = totalBudget - totalSpent;

  const thisMonthExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesProject =
        projectFilter === "All" || expense.project === projectFilter;

      const matchesCategory =
        categoryFilter === "All" || expense.category === categoryFilter;

      return matchesProject && matchesCategory;
    });
  }, [projectFilter, categoryFilter]);

  const projects = [
    ...new Set(projectFinance.map((project) => project.project)),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Finance</h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor project budgets, expenses and financial performance.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
        >
          + Add Expense
        </button>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Project Budget</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatCurrency(totalBudget)}
          </p>

          <p className="mt-1 text-xs text-slate-400">Across all projects</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Spent</p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {formatCurrency(totalSpent)}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Current project spending
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Remaining Budget</p>

          <p
            className={`mt-2 text-2xl font-bold ${
              remainingBudget >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {formatCurrency(Math.abs(remainingBudget))}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {remainingBudget >= 0 ? "Available budget" : "Budget exceeded"}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Current Month Expenses</p>

          <p className="mt-2 text-2xl font-bold text-amber-600">
            {formatCurrency(thisMonthExpenses)}
          </p>

          <p className="mt-1 text-xs text-slate-400">September 2026</p>
        </div>
      </div>

      {/* Project Financial Performance */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">
            Project Financial Performance
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Compare project budgets with actual spending.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {projectFinance.map((project) => {
            const percentage = Math.round(
              (project.spent / project.budget) * 100,
            );

            const remaining = project.budget - project.spent;

            return (
              <div key={project.id} className="space-y-4 px-5 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {project.project}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Budget: {formatCurrency(project.budget)}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${getProjectStatusStyle(
                      project.status,
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Spending</span>

                    <span
                      className={`font-semibold ${
                        percentage > 100 ? "text-red-600" : "text-slate-700"
                      }`}
                    >
                      {percentage}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        percentage > 100 ? "bg-red-500" : "bg-amber-500"
                      }`}
                      style={{
                        width: `${Math.min(percentage, 100)}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
                  <div>
                    <p className="text-xs text-slate-400">Spent</p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {formatCurrency(project.spent)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Remaining</p>

                    <p
                      className={`mt-1 font-semibold ${
                        remaining >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formatCurrency(Math.abs(remaining))}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Variance</p>

                    <p className="mt-1 font-semibold text-slate-700">
                      {remaining >= 0 ? "Within Budget" : "Exceeded"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expense Summary */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Expense Breakdown</h2>

          <p className="mt-1 text-xs text-slate-500">
            Spending by expense category.
          </p>

          <div className="mt-5 space-y-4">
            {expenseSummary.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    {item.category}
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {formatCurrency(item.amount)}
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{
                      width: `${Math.min((item.amount / 3000000) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Alert */}
        <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Financial Alerts</h2>

          <div className="mt-5 space-y-3">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">
                Metro Heights is over budget
              </p>

              <p className="mt-1 text-xs text-red-600">
                Spending has exceeded the planned project budget.
              </p>
            </div>

            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">
                Pending contractor payment
              </p>

              <p className="mt-1 text-xs text-amber-700">
                Palm Residency has a pending contractor payment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400"
          >
            <option value="All">All Categories</option>
            <option value="Materials">Materials</option>
            <option value="Labour">Labour</option>
            <option value="Contractor">Contractor</option>
            <option value="Equipment">Equipment</option>
          </select>
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">Recent Expenses</h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest financial transactions.
          </p>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">Description</th>
                <th className="px-5 py-3">Project</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="transition hover:bg-slate-50">
                  <td className="px-5 py-4">
                    <p className="font-medium text-slate-800">
                      {expense.description}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {expense.project}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getCategoryStyle(
                        expense.category,
                      )}`}
                    >
                      {expense.category}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                    {formatCurrency(expense.amount)}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {expense.date}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getPaymentStatusStyle(
                        expense.status,
                      )}`}
                    >
                      {expense.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="divide-y divide-slate-100 lg:hidden">
          {filteredExpenses.map((expense) => (
            <div key={expense.id} className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-800">
                    {expense.description}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {expense.project}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${getPaymentStatusStyle(
                    expense.status,
                  )}`}
                >
                  {expense.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getCategoryStyle(
                    expense.category,
                  )}`}
                >
                  {expense.category}
                </span>

                <span className="font-semibold text-slate-900">
                  {formatCurrency(expense.amount)}
                </span>
              </div>

              <p className="text-xs text-slate-500">{expense.date}</p>
            </div>
          ))}
        </div>

        {filteredExpenses.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="font-medium text-slate-700">No expenses found</p>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Finance;
