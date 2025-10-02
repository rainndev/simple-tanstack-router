import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-5 px-8 bg-white/10 rounded-xl no-underline space-y-2">
      <h1 className="text-3xl">John Doe</h1>
      <p className="text-xl">johndoe@gmail.com</p>
    </div>
  );
}
