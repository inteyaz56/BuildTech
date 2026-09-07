import React from "react";

const Budget = () => {
  return (
    <div>
      {/* Budget Overview */}
      <div className="mt-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Budget Overview</h2>

          <p className="text-sm text-gray-500">
            Project budget and spending overview
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="px-5 py-4">Project</th>

                <th className="px-5 py-4">Budget</th>

                <th className="px-5 py-4">Spent</th>

                <th className="px-5 py-4">Remaining</th>

                <th className="px-5 py-4">Usage</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-5 py-4 font-medium">
                  Green Valley Residency
                </td>

                <td className="px-5 py-4 text-sm">₹12 Cr</td>

                <td className="px-5 py-4 text-sm">₹8.4 Cr</td>

                <td className="px-5 py-4 text-sm">₹3.6 Cr</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "70%" }}
                      />
                    </div>

                    <span className="text-sm">70%</span>
                  </div>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-5 py-4 font-medium">Metro Heights</td>

                <td className="px-5 py-4 text-sm">₹18 Cr</td>

                <td className="px-5 py-4 text-sm">₹17.2 Cr</td>

                <td className="px-5 py-4 text-sm">₹0.8 Cr</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "96%" }}
                      />
                    </div>

                    <span className="text-sm">96%</span>
                  </div>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-5 py-4 font-medium">Palm Residency</td>

                <td className="px-5 py-4 text-sm">₹9 Cr</td>

                <td className="px-5 py-4 text-sm">₹7.8 Cr</td>

                <td className="px-5 py-4 text-sm">₹1.2 Cr</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "87%" }}
                      />
                    </div>

                    <span className="text-sm">87%</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">City Homes</td>

                <td className="px-5 py-4 text-sm">₹7.5 Cr</td>

                <td className="px-5 py-4 text-sm">₹3.2 Cr</td>

                <td className="px-5 py-4 text-sm">₹4.3 Cr</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-black"
                        style={{ width: "43%" }}
                      />
                    </div>

                    <span className="text-sm">43%</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      ;
    </div>
  );
};

export default Budget;
