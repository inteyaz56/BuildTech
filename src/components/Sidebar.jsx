import { useSelector } from "react-redux";

const roleMenus = {
  owner: [
    ["Dashboard", "▦"],
    ["Projects", "▣"],
    ["Sites", "⌂"],
    ["Tasks", "✓"],
    ["Inventory", "▤"],
    ["Procurement", "◈"],
    ["Finance", "₹"],
    ["Reports", "◫"],
  ],

  admin: [
    ["Dashboard", "▦"],
    ["Users", "♙"],
    ["Projects", "▣"],
    ["Roles & Permissions", "⚙"],
    ["Activity Logs", "◫"],
    ["Settings", "⚙"],
  ],

  project_manager: [
    ["Dashboard", "▦"],
    ["My Projects", "▣"],
    ["Tasks", "✓"],
    ["Sites", "⌂"],
    ["Materials", "▤"],
    ["Issues", "⚠"],
    ["Reports", "◫"],
  ],

  site_manager: [
    ["Dashboard", "▦"],
    ["My Site", "⌂"],
    ["Daily Reports", "◫"],
    ["Workers", "♙"],
    ["Attendance", "✓"],
    ["Materials", "▤"],
    ["Issues", "⚠"],
    ["Tasks", "✓"],
  ],

  accountant: [
    ["Dashboard", "▦"],
    ["Expenses", "₹"],
    ["Payments", "₹"],
    ["Invoices", "▤"],
    ["Vendors", "♙"],
    ["Contractors", "♙"],
    ["Financial Reports", "◫"],
  ],

  procurement_manager: [
    ["Dashboard", "▦"],
    ["Material Requests", "▤"],
    ["Purchase Orders", "◈"],
    ["Vendors", "♙"],
    ["Deliveries", "▣"],
    ["Inventory", "▤"],
    ["Reports", "◫"],
  ],

  supervisor: [
    ["Dashboard", "▦"],
    ["My Tasks", "✓"],
    ["Workers", "♙"],
    ["Attendance", "✓"],
    ["Progress", "◫"],
    ["Issues", "⚠"],
  ],

  contractor: [
    ["Dashboard", "▦"],
    ["My Projects", "▣"],
    ["My Work", "✓"],
    ["Progress", "◫"],
    ["Bills", "₹"],
    ["Payments", "₹"],
  ],
};

function Sidebar({ mobileOpen, setMobileOpen }) {
  const currentUser = useSelector((state) => state.user.currentUser);

  const menu = roleMenus[currentUser.role] || roleMenus.owner;

  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64
          border-r border-slate-200 bg-white
          transition-transform duration-300
          lg:block lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}

        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white shadow-sm">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                ConstructionOS
              </h1>

              <p className="text-xs text-slate-500">Construction Platform</p>
            </div>
          </div>
        </div>

        {/* Company */}

        <div className="px-4 py-5">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-400">COMPANY</p>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              BuildTech Construction
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="px-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1">
            {menu.map(([label, icon], index) => (
              <button
                key={label}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex w-full items-center gap-3
                  rounded-xl px-3 py-3
                  text-sm font-medium
                  transition
                  ${
                    index === 0
                      ? "bg-amber-50 text-amber-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                <span className="flex w-5 justify-center">{icon}</span>

                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* User */}

        <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              {currentUser.initials}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">
                {currentUser.name}
              </p>

              <p className="text-xs text-slate-500">{currentUser.roleName}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
