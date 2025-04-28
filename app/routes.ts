import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout('./routes/admin/admin-layout.tsx', [
    route("", "./routes/admin/dashboard.tsx"), // Mounts dashboard at "/"
    route("all-users", "./routes/admin/all-users.tsx"), // Mounts dashboard at "/"
  ]),
] satisfies RouteConfig;
