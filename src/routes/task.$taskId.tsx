import { createFileRoute } from "@tanstack/react-router";
import TaskData from "../data/task.json";

export const Route = createFileRoute("/task/$taskId")({
  component: RouteComponent,
  loader: ({ params }) => {
    const task = TaskData.find((task) => String(task.id) == params.taskId);

    return { task };
  },
});

function RouteComponent() {
  const { task } = Route.useLoaderData();

  console.log("task", task);

  return (
    <div className="p-10 bg-white/10 rounded-xl no-underline min-w-3xl">
      <h1 className="text-2xl text-white">{task?.description}</h1>
      <p className="text-lg text-[#212121] px-3 py1.5 bg-amber-200 rounded-lg w-fit mt-2 ">
        {task?.status}
      </p>
    </div>
  );
}
