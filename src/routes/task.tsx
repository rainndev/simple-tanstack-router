import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import TaskData from "../data/task.json";

export const Route = createFileRoute("/task")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-15">
      <div className="flex flex-col  gap-2">
        {TaskData.map((data) => (
          <Link
            className="underline"
            params={{ taskId: String(data.id) }}
            to="/task/$taskId"
          >
            {data.title}
          </Link>
        ))}
      </div>

      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
