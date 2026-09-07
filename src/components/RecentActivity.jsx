import React from "react";

const RecentActivity = () => {
  return (
    <div>
      {/* Recent Activity */}
      <div className="mt-8 pb-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>

          <p className="text-sm text-gray-500">
            Latest updates from your construction projects
          </p>
        </div>

        <div className="rounded-xl border bg-white">
          {/* Activity 1 */}
          <div className="flex items-start gap-4 border-b p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              📦
            </div>

            <div>
              <p className="text-sm font-medium">Material received</p>

              <p className="mt-1 text-sm text-gray-500">
                300 bags of cement received at Green Valley Residency.
              </p>

              <p className="mt-1 text-xs text-gray-400">10 minutes ago</p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex items-start gap-4 border-b p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              👷
            </div>

            <div>
              <p className="text-sm font-medium">Daily site report submitted</p>

              <p className="mt-1 text-sm text-gray-500">
                Site report submitted for Metro Heights.
              </p>

              <p className="mt-1 text-xs text-gray-400">1 hour ago</p>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="flex items-start gap-4 border-b p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              💰
            </div>

            <div>
              <p className="text-sm font-medium">Payment recorded</p>

              <p className="mt-1 text-sm text-gray-500">
                ₹2.5L payment made to ABC Contractors.
              </p>

              <p className="mt-1 text-xs text-gray-400">3 hours ago</p>
            </div>
          </div>

          {/* Activity 4 */}
          <div className="flex items-start gap-4 p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              📋
            </div>

            <div>
              <p className="text-sm font-medium">New material request</p>

              <p className="mt-1 text-sm text-gray-500">
                Steel request created for Palm Residency.
              </p>

              <p className="mt-1 text-xs text-gray-400">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
