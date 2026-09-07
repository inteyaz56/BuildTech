import { useSelector } from "react-redux";

import UserSwitcher from "./UserSwitcher";

function Navbar({ onMenuClick }) {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      {/* Left */}

      <div className="flex items-center gap-3">
        {/* Mobile Menu */}

        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-lg text-slate-600 hover:bg-slate-50 lg:hidden"
        >
          ☰
        </button>

        <div>
          <p className="text-sm text-slate-500">Welcome back,</p>

          <h2 className="text-lg font-bold text-slate-900">
            {currentUser.name}
          </h2>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 sm:flex">
          🔔
        </button>

        <UserSwitcher />
      </div>
    </header>
  );
}

export default Navbar;
