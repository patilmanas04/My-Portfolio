"use client";

import {
  BookOpen,
  Briefcase,
  FileDown,
  FileText,
  Home,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMMAND_MENU_TOGGLE_EVENT } from "@/components/CommandMenu";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Research", href: "/research", icon: BookOpen },
  { label: "Community", href: "/community", icon: Users },
  { label: "Articles", href: "/articles", icon: FileText },
  { label: "CV", href: "/cv", icon: FileDown },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  function openCommandMenu() {
    window.dispatchEvent(new Event(COMMAND_MENU_TOGGLE_EVENT));
  }

  return (
    <>
      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b-4 border-black bg-primary p-4 md:hidden">
        <Link href="/" className="inline-flex w-fit cursor-pointer items-center gap-4">
          <span className="inline-flex h-8 w-8 cursor-pointer items-center justify-center border-4 border-black bg-white text-xs font-black leading-none shadow-neo-shadow transition-all duration-150 ease-in-out active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            {"</>"}
          </span>
          <span className="text-xl font-black uppercase tracking-tight text-black">MP</span>
        </Link>
        <button
          type="button"
          onClick={openCommandMenu}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border-4 border-black bg-accent text-black shadow-neo-shadow transition-all duration-150 ease-in-out active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Search"
        >
          <Search size={20} strokeWidth={3} aria-hidden="true" />
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r-4 border-black bg-primary p-4 md:flex lg:w-1/5">
        <div className="flex h-full flex-col gap-5">
          <Link href="/" className="inline-flex w-fit cursor-pointer items-center gap-5">
            <span className="inline-flex h-8 w-8 cursor-pointer items-center justify-center border-4 border-black bg-white text-xs font-black leading-none shadow-neo-shadow transition-all duration-150 ease-in-out active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {"</>"}
            </span>
            <span className="text-xl font-black uppercase tracking-tight text-black">MP</span>
          </Link>

          <button
            type="button"
            onClick={openCommandMenu}
            className="flex w-full cursor-pointer items-center gap-2 border-2 border-black bg-accent px-3 py-2 text-left text-sm font-black uppercase text-black shadow-neo-shadow transition-all duration-150 ease-in-out hover:bg-secondary active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            <Search className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden="true" />
            <span className="min-w-0 flex-1">Search</span>
            <span className="border-2 border-black bg-white px-1.5 py-0.5 font-mono text-[10px] font-black leading-none">
              Cmd+K
            </span>
          </button>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm font-extrabold uppercase tracking-wide transition-colors ${
                    active ? "bg-black text-white" : "text-black hover:bg-background"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 grid h-14 grid-cols-6 items-center border-t-4 border-black bg-primary md:hidden">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-full w-full items-center justify-center transition-all duration-300 ease-in-out ${
                active ? "bg-white" : "bg-transparent hover:bg-black/5"
              }`}
            >
              <Icon size={20} className={`shrink-0 transition-colors duration-300 ${active ? "text-black" : "text-black/60"}`} strokeWidth={active ? 3 : 2} aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </>
  );
}
