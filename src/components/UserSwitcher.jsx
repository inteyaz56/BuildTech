import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../data/users";
import { switchUser } from "../redux/userSlice";

function UserSwitcher() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  const [open, setOpen] = useState(false);

  const handleUserChange = (user) => {
    dispatch(switchUser(user));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
          {currentUser.initials}
        </div>

        <div className="hidden text-left sm:block">
          <p className="text-sm font-semibold text-slate-800">
            {currentUser.name}
          </p>

          <p className="text-xs text-slate-500">{currentUser.roleName}</p>
        </div>

        <span className="text-xs text-slate-400">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Demo User
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Switch role to preview dashboards
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto p-2">
            {users.map((user) => (
              <button
                key={user.id}
                onClick={() => handleUserChange(user)}
                className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                  currentUser.id === user.id
                    ? "bg-amber-50"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {user.initials}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {user.name}
                  </p>

                  <p className="text-xs text-slate-500">{user.roleName}</p>
                </div>

                {currentUser.id === user.id && (
                  <span className="ml-auto text-amber-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSwitcher;
