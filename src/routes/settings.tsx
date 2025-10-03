import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 rounded-lg items-center bg-white/10 p-10">
        <Switch
          checked={darkMode}
          onCheckedChange={setDarkMode}
          className="bg-white/10"
          id="theme"
        />
        <Label className="text-xl" htmlFor="theme">
          Theme: {darkMode ? "Dark" : "Light"}
        </Label>
      </div>

      <div className="flex gap-2 rounded-lg items-center bg-white/10 p-10">
        <Switch
          checked={notificationEnabled}
          onCheckedChange={setNotificationEnabled}
          className="bg-white/10"
          id="notification"
        />
        <Label className="text-xl" htmlFor="notification">
          Notification:
          {notificationEnabled ? " Enabled" : " Disabled"}
        </Label>
      </div>
    </div>
  );
}
