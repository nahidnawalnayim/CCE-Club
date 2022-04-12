import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState, useRef, useEffect } from "react";
import ThemeChanger from "../ThemeChanger";

const Nav = () => {
  const router = useRouter();
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onRouteChangeComplete = () => setShowNav(false);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);
  });
  useEffect(() => {
    // detect outside click to close menu
    const onMouseDown = (event) => {
      if (!navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);
  return (
    <nav className='z-30 flex w-screen max-w-screen-2xl flex-row items-center justify-between rounded-xl bg-black text-white transition-all  duration-500 dark:bg-white dark:text-black sm:px-2 sm:pl-3'>
      <ul className=' flex h-16  items-center  justify-center  text-lg font-bold'>
        <Link href='/'>
          <a className='pl-4'>CCE_CLUB</a>
        </Link>
      </ul>
      <ul
        className={` absolute top-16 flex w-full -translate-x-full flex-col items-center justify-center rounded-xl bg-black ease-in-out sm:translate-x-0 ${
          showNav ? "translate-x-0" : "translate-x-full"
        } font-semibold transition-all duration-500 dark:bg-white sm:relative sm:top-0 sm:flex-row `}>
        {[
          ["about", "About Us", "/about"],
          ["executives", "Executives", "/executives"],
          ["achivements", "Achivements", "/achivements"],
          ["gallery", "Gallery", "/gallery"],
          ["events", "Events", "/events"],
        ].map(([key, title, url]) => (
          <li className='p-3' key={key}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex space-x-2 px-2'>
        <li>
          <ThemeChanger />
        </li>
        <li
          className='flex sm:hidden'
          ref={navRef}
          onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <XIcon className='h-6 cursor-pointer' />
          ) : (
            <MenuIcon className='h-6 cursor-pointer' />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
