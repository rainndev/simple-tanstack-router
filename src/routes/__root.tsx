import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>404 not found</div>,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-[#212121] text-amber-200">
        <div className="w-full bg-amber-200 text-[#212121] font-bold p-2 space-x-2 underline flex items-center justify-center gap-10">
          <Link to="/profile">Profile</Link>
          <Link to="/task">Task</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <div className="w-full h-dvh  flex items-center justify-center text-2xl p-10 ">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
