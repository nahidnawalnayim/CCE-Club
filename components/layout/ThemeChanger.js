import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    // <button
    //   className='cursor-pointer'
    //   onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    //   {theme === "light" ? "Dark" : "light"}
    // </button>
    <>
      {theme === "light" ? (
        <MoonIcon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className='h-6 cursor-pointer '
        />
      ) : (
        <SunIcon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className='h-6 cursor-pointer '
        />
      )}
    </>
  );
};

export default ThemeChanger;
