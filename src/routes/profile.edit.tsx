import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white/10 rounded-xl  p-10">
      <div className="flex flex-col w-80">
        <label htmlFor="email" className="text-sm mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border p-3 text-sm  rounded-lg "
        />

        <label htmlFor="fullname" className="text-sm my-2">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="Full name"
          className="border p-3 text-sm  rounded-lg"
        />

        <label htmlFor="bio" className="text-sm my-2">
          Bio
        </label>
        <input
          id="bio"
          type="text"
          placeholder="Bio"
          className="border p-3 text-sm  rounded-lg"
        />
      </div>
    </div>
  );
}
