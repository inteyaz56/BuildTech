import { useSelector } from "react-redux";

function Sidebar() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const menuItems = [
    {
      label: "Dashboard",
      icon: "▦",
    },
    {
      label: "Projects",
      icon: "▣",
    },
    {
      label: "Sites",
      icon: "⌂",
    },
    {
      label: "Tasks",
      icon: "✓",
    },
    {
      label: "Inventory",
      icon: "▤",
    },
    {
      label: "Procurement",
      icon: "◈",
    },
    {
      label: "Finance",
      icon: "₹",
    },
    {
      label: "Reports",
      icon: "◫",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white shadow-sm">
            C
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">ConstructionOS</h1>

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
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                index === 0
                  ? "bg-amber-50 text-amber-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="flex w-5 justify-center text-base">
                {item.icon}
              </span>

              {item.label}
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
  );
}

export default Sidebar;
