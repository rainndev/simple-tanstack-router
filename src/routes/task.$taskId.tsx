import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { todoType } from "@/types/todo";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export const Route = createFileRoute("/task/$taskId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { taskId } = Route.useParams();
  const { data } = useSuspenseQuery<todoType>({
    queryKey: ["todos", taskId],
    queryFn: async () => {
      const response = await fetch(apiUrl + "/" + taskId);
      return response.json();
    },
  });

  console.log("data", data);
  return (
    <div className="p-10 bg-white/10 rounded-xl no-underline min-w-3xl ">
      <h1 className="text-2xl text-white">{data.title}</h1>
      <p className="text-lg text-[#212121] px-3 py1.5 bg-amber-200 rounded-lg w-fit mt-2 ">
        {data.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}
