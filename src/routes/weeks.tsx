import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/weeks")({
  component: WeeksLayout,
});

function WeeksLayout() {
  return <Outlet />;
}
