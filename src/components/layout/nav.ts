import {
  BookOpen,
  Flag,
  GitCompare,
  Home,
  Layers,
  ListChecks,
  MessageSquareQuote,
  Route,
  ShieldAlert,
} from "lucide-react";

export const navItems = [
  { to: "/", label: "الرئيسية", icon: Home, end: true },
  { to: "/weeks", label: "الأسابيع", icon: BookOpen, end: false },
  { to: "/gates", label: "البوابات", icon: Flag, end: false },
  { to: "/project", label: "المشروع", icon: Layers, end: false },
  { to: "/rules", label: "القواعد", icon: ListChecks, end: false },
  { to: "/interview", label: "الإنترفيو", icon: MessageSquareQuote, end: false },
  { to: "/tracks", label: "المسار الموازي", icon: Route, end: false },
  { to: "/changes", label: "ماذا تغيّر", icon: GitCompare, end: false },
  { to: "/skip", label: "لن ندرسه", icon: ShieldAlert, end: false },
] as const;

export const mobilePrimary = [
  { to: "/", label: "الرئيسية", icon: Home, end: true },
  { to: "/weeks", label: "الأسابيع", icon: BookOpen, end: false },
  { to: "/gates", label: "البوابات", icon: Flag, end: false },
  { to: "/interview", label: "الإنترفيو", icon: MessageSquareQuote, end: false },
] as const;
