import { createFileRoute } from "@tanstack/react-router";
import { MdEdit } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-10 bg-white/10 rounded-xl no-underline space-y-2 items-center flex flex-col">
      <h1 className="text-5xl text-amber-50 font-bold">John Doe</h1>
      <p className="text-xl text-amber-50">johndoe@gmail.com</p>
      <p className="text-xl text-amber-100">
        Aspiring full stack web developer.
      </p>

      <div className="flex gap-2 mt-5">
        <div className="p-2.5 border rounded-xl cursor-pointer">
          <MdEdit className="size-5" />
        </div>
        <div className="p-2.5 border rounded-xl cursor-pointer">
          <IoIosMore className="size-5" />
        </div>
      </div>
    </div>
  );
}
