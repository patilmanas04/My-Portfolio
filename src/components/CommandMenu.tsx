"use client";

import data from "@/data/data.json";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const COMMAND_MENU_TOGGLE_EVENT = "command-menu:toggle";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  { label: "Community", href: "/community" },
  { label: "Articles", href: "/articles" },
  { label: "CV", href: "/cv" },
];

type SearchableItem = {
  id: string;
  title?: string;
  description?: string;
  role?: string;
  techStack?: string[];
};

type SearchGroup = {
  label: string;
  href: string;
  hoverTone: string;
  items: SearchableItem[];
};

const searchableGroups: SearchGroup[] = [
  { label: "Work", href: "/work", hoverTone: "hover:bg-secondary", items: data.work },
  { label: "Research", href: "/research", hoverTone: "hover:bg-accent", items: data.research },
  { label: "Community", href: "/community", hoverTone: "hover:bg-primary", items: data.community },
  { label: "Articles", href: "/articles", hoverTone: "hover:bg-secondary", items: data.articles },
];

function getSearchText(item: SearchableItem) {
  return [item.title, item.description, item.role, item.techStack?.join(" ")]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function filterSearchGroups(searchQuery: string) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return searchableGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => getSearchText(item).includes(normalizedQuery)),
    }))
    .filter((group) => group.items.length > 0);
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const hasSearchQuery = searchQuery.trim().length > 0;
  const filteredGroups = filterSearchGroups(searchQuery);

  function closeCommandMenu() {
    setIsOpen(false);
    setSearchQuery("");
  }

  function toggleCommandMenu() {
    setIsOpen((current) => {
      const nextState = !current;

      if (!nextState) {
        setSearchQuery("");
      }

      return nextState;
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isCommandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isCommandShortcut) {
        event.preventDefault();
        toggleCommandMenu();
      }

      if (event.key === "Escape") {
        closeCommandMenu();
      }
    }

    function handleToggle() {
      toggleCommandMenu();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(COMMAND_MENU_TOGGLE_EVENT, handleToggle);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(COMMAND_MENU_TOGGLE_EVENT, handleToggle);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
      onMouseDown={closeCommandMenu}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="w-full max-w-2xl border-4 border-black bg-background shadow-[10px_10px_0_#000]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search all data..."
          className="w-full border-0 border-b-4 border-black bg-white px-4 py-4 text-xl font-black uppercase text-black placeholder:text-black/40 focus:outline-none md:text-2xl"
        />

        <nav className="grid max-h-[60vh] gap-3 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-track]:border-l-2 [&::-webkit-scrollbar-track]:border-black [&::-webkit-scrollbar-track]:bg-white">
          {!hasSearchQuery &&
            quickLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeCommandMenu}
                className={`cursor-pointer border-4 border-black px-4 py-3 text-lg font-black uppercase text-black transition-colors ${
                  index % 2 === 0 ? "bg-white hover:bg-secondary" : "bg-white hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}

          {hasSearchQuery &&
            filteredGroups.map((group) => (
              <section key={group.label} className="grid gap-2">
                <h2 className="border-4 border-black bg-black px-3 py-2 text-sm font-black uppercase tracking-widest text-white">
                  {group.label}
                </h2>

                {group.items.map((item) => (
                  <Link
                    key={`${group.label}-${item.id}`}
                    href={group.href}
                    onClick={closeCommandMenu}
                    className={`cursor-pointer border-4 border-black bg-white px-4 py-3 text-left text-black transition-colors ${group.hoverTone}`}
                  >
                    <span className="block text-base font-black uppercase leading-tight md:text-lg">
                      {item.title ?? item.role}
                    </span>

                    {item.description && (
                      <span className="mt-2 block text-sm font-bold normal-case leading-snug">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </section>
            ))}

          {hasSearchQuery && filteredGroups.length === 0 && (
            <div className="border-4 border-black bg-accent px-4 py-3 text-lg font-black uppercase">
              No results found
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
