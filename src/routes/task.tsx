import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { todoType } from "@/types/todo";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const todosQueryOptions = queryOptions({
  queryKey: ["todos"],
  queryFn: async () => {
    const response = await fetch(apiUrl);
    return response.json();
  },
});

export const Route = createFileRoute("/task")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(todosQueryOptions);
  return (
    <div className="flex gap-15">
      <div className="flex flex-col h-screen gap-2 overflow-y-auto p-10">
        {data.map((data: todoType) => (
          <div className="flex gap-2 items-center">
            <Link
              className="underline"
              preload="intent"
              preloadDelay={100}
              params={{ taskId: String(data.id) }}
              to="/task/$taskId"
            >
              {data.title}
            </Link>
            <IoIosArrowDroprightCircle />
          </div>
        ))}
      </div>

      <div className="mt-5 ">
        <Outlet />
      </div>
    </div>
  );
}
