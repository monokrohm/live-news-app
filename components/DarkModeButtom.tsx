"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function DarkModeButtom() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-8 w-8 text-[#F18900] cursor-pointer"
          onClick={() => setTheme("light")}
        ></SunIcon>
      ) : (
        <MoonIcon
          className="h-8 w-8 text-gray-900 cursor-pointer"
          onClick={() => setTheme("dark")}
        ></MoonIcon>
      )}
    </div>
  );
}

export default DarkModeButtom;
