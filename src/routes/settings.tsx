import { Label } from "@/components/ui/label";
import { Switch } from "@radix-ui/react-switch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Switch id="theme" />
      <Label htmlFor="theme">Theme</Label>
    </div>
  );
}
