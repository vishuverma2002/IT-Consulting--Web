// App-wide constant tokens. Centralizing route strings here prevents typos in
// <Link href> across the app and makes large-scale route renames safe.

export const ROUTES = {
  home: "/",
  contact: "/contact",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  profile: "/dashboard/profile",
  clients: "/dashboard/clients",
  analytics: "/dashboard/analytics",
  appointments: "/dashboard/appointments",
  settings: "/dashboard/settings",
};

export const CLIENT_STATUS = {
  ACTIVE: "active",
  PROSPECT: "prospect",
  ARCHIVED: "archived",
};
