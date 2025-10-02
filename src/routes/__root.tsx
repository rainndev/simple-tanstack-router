import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-[#212121] text-amber-200">
        <div className="w-full bg-amber-200 text-[#212121] font-bold p-2 space-x-2 underline">
          <Link to="/profile">Profile</Link>
          <Link to="/task">Task</Link>
        </div>
        <div className="w-full h-dvh flex items-center justify-center text-2xl">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
