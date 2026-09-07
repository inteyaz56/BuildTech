import Budget from "../components/Budget";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  const projects = [
    {
      name: "Green Valley Residency",
      location: "Chandigarh",
      progress: 68,
      status: "On Track",
      value: "₹12 Cr",
    },
    {
      name: "Metro Heights",
      location: "Delhi",
      progress: 54,
      status: "Delayed",
      value: "₹18 Cr",
    },
    {
      name: "Palm Residency",
      location: "Mohali",
      progress: 82,
      status: "At Risk",
      value: "₹9 Cr",
    },
    {
      name: "City Homes",
      location: "Panchkula",
      progress: 41,
      status: "On Track",
      value: "₹7.5 Cr",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back. Here's what's happening with your projects.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">Active Projects</p>

          <h2 className="mt-2 text-2xl font-bold">12</h2>

          <p className="mt-1 text-sm text-gray-500">8 on track</p>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">Delayed Projects</p>

          <h2 className="mt-2 text-2xl font-bold">2</h2>

          <p className="mt-1 text-sm text-red-500">Needs attention</p>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">Project Value</p>

          <h2 className="mt-2 text-2xl font-bold">₹48.2 Cr</h2>

          <p className="mt-1 text-sm text-gray-500">Total active projects</p>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">Outstanding</p>

          <h2 className="mt-2 text-2xl font-bold">₹7.4 Cr</h2>

          <p className="mt-1 text-sm text-gray-500">Pending payments</p>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Projects</h2>

            <p className="text-sm text-gray-500">
              Overview of your active projects
            </p>
          </div>

          <button className="rounded-lg bg-black px-4 py-2 text-sm text-white">
            View All
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="px-5 py-4">Project</th>

                <th className="px-5 py-4">Location</th>

                <th className="px-5 py-4">Progress</th>

                <th className="px-5 py-4">Status</th>

                <th className="px-5 py-4">Value</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.name} className="border-b last:border-b-0">
                  <td className="px-5 py-4">
                    <p className="font-medium">{project.name}</p>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">
                    {project.location}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-black"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-sm">{project.progress}%</span>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="text-sm">{project.status}</span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium">
                    {project.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Construction Control Tower */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Construction Control Tower
            </h2>

            <p className="text-sm text-gray-500">
              Things that need your attention
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Delayed Project */}
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-red-600">
                    Delayed Project
                  </p>

                  <h3 className="mt-2 font-semibold">Metro Heights</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Project is 8 days behind schedule.
                  </p>
                </div>

                <span className="text-xl">⚠</span>
              </div>

              <button className="mt-4 text-sm font-medium text-blue-600">
                View Project →
              </button>
            </div>

            {/* Low Inventory */}
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-600">
                    Low Inventory
                  </p>

                  <h3 className="mt-2 font-semibold">Steel</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Steel stock is below the minimum level.
                  </p>
                </div>

                <span className="text-xl">⚠</span>
              </div>

              <button className="mt-4 text-sm font-medium text-blue-600">
                Check Inventory →
              </button>
            </div>

            {/* Overdue Payment */}
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-red-600">
                    Payment Overdue
                  </p>

                  <h3 className="mt-2 font-semibold">Palm Residency</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Contractor payment of ₹4.2L is overdue.
                  </p>
                </div>

                <span className="text-xl">⚠</span>
              </div>

              <button className="mt-4 text-sm font-medium text-blue-600">
                View Payment →
              </button>
            </div>

            {/* Delayed Delivery */}
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-600">
                    Material Delivery
                  </p>

                  <h3 className="mt-2 font-semibold">City Homes</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Material delivery has been delayed.
                  </p>
                </div>

                <span className="text-xl">⚠</span>
              </div>

              <button className="mt-4 text-sm font-medium text-blue-600">
                View Procurement →
              </button>
            </div>
          </div>
        </div>
        <Budget />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
