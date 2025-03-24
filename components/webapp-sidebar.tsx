"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Camera,
  BookOpen,
  BarChart4,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/webapp/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    color: "terracotta",
  },
  {
    title: "Practice",
    href: "/webapp",
    icon: <Camera className="h-5 w-5" />,
    color: "sage",
  },
  {
    title: "Lessons",
    href: "/webapp/lessons",
    icon: <BookOpen className="h-5 w-5" />,
    color: "sky",
  },
  {
    title: "Progress",
    href: "/webapp/progress",
    icon: <BarChart4 className="h-5 w-5" />,
    color: "dawn",
  },
  {
    title: "Settings",
    href: "/webapp/settings",
    icon: <Settings className="h-5 w-5" />,
    color: "stone",
  },
  {
    title: "Help",
    href: "/webapp/help",
    icon: <HelpCircle className="h-5 w-5" />,
    color: "dusk",
  },
];

export function WebappSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-white/80 backdrop-blur border-r border-yoga-sage/20 min-h-screen md:min-h-0">
      <div className="space-y-4 py-6">
        <div className="px-6 py-2">
          <h2 className="text-lg font-semibold text-yoga-earth">Navigation</h2>
        </div>
        <nav className="space-y-1 px-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const colorClasses = {
              terracotta: isActive
                ? "bg-yoga-terracotta/10 text-yoga-terracotta"
                : "hover:bg-yoga-terracotta/10 hover:text-yoga-terracotta",
              sage: isActive
                ? "bg-yoga-sage/10 text-yoga-moss"
                : "hover:bg-yoga-sage/10 hover:text-yoga-moss",
              sky: isActive
                ? "bg-yoga-sky/10 text-yoga-sky"
                : "hover:bg-yoga-sky/10 hover:text-yoga-sky",
              dawn: isActive
                ? "bg-yoga-dawn/10 text-yoga-sunset"
                : "hover:bg-yoga-dawn/10 hover:text-yoga-sunset",
              stone: isActive
                ? "bg-yoga-stone/10 text-yoga-stone"
                : "hover:bg-yoga-stone/10 hover:text-yoga-stone",
              dusk: isActive
                ? "bg-yoga-dusk/10 text-yoga-dusk"
                : "hover:bg-yoga-dusk/10 hover:text-yoga-dusk",
            };

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  isActive
                    ? colorClasses[item.color]
                    : "text-yoga-earth/70 " + colorClasses[item.color],
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="absolute bottom-6 px-4 w-full md:w-64">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-yoga-terracotta/10 hover:text-yoga-terracotta text-yoga-earth/70"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
