import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import TaskData from "../data/task.json";

export const Route = createFileRoute("/task")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-15">
      <div className="flex flex-col  gap-2">
        {TaskData.map((data) => (
          <div className="flex gap-2 items-center">
            <Link
              className="underline"
              params={{ taskId: String(data.id) }}
              to="/task/$taskId"
            >
              {data.title}
            </Link>
            <IoIosArrowDroprightCircle />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
