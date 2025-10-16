import { Home, Bell, Users, BookOpen, Settings, Calendar } from "lucide-react";

export const userLinks = [
  { href: "/user/home", label: "Home", icon: Home },
  {
    href: "/user/parish_announcements",
    label: "Parish Announcements",
    icon: Bell,
  },
  { href: "/user/groups", label: "Groups", icon: Users },
  { href: "/user/catechism", label: "Catechism", icon: BookOpen },
  { href: "/user/bookings", label: "Bookings", icon: Calendar },
  { href: "/user/settings", label: "Settings", icon: Settings },
];

export const priestLinks = [
  { href: "/priest/home", label: "Home", icon: Home },
  { href: "/priest/members", label: "Members", icon: Users },
  { href: "/priest/announcements", label: "Announcements", icon: Bell },
  { href: "/priest/settings", label: "Settings", icon: Settings },
];

export const leaderLinks = [
  { href: "/leaders/home", label: "Home", icon: Home },
  { href: "/leaders/groups", label: "Groups", icon: Users },
  { href: "/leaders/announcements", label: "Announcements", icon: Bell },
];

export const catechistLinks = [
  { href: "/catechist/home", label: "Home", icon: Home },
  { href: "/catechist/catechism", label: "Catechism", icon: BookOpen },
  { href: "/catechist/announcements", label: "Announcements", icon: Bell },
];
