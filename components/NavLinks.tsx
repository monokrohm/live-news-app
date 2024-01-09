"use client";

import { categories } from "@/util/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid gap-4 pb-10 max-x-6xl mx-auto grid-cols-4 md:grid-cols-7 text-xs md:text-sm border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
