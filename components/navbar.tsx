import React, { useEffect, useState } from "react";
import * as Icons from "@heroicons/react/solid";
import Scrollspy from "react-scrollspy";
import classNames from "classnames";

type NavbarLink = {
  title: string;
  href: string;
};

const links: NavbarLink[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#service",
  },
  {
    title: "Menu",
    href: "#menu",
  },
  {
    title: "Contact",
    href: "#reservation",
  },
];

export default function Navbar() {
  const [navDark, setNavDark] = useState(false);
  const [active, setActive] = useState(false);

  const onScroll = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setNavDark(true);
    } else if (window.pageYOffset <= window.innerHeight) {
      setNavDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={classNames(
        "fixed text-white flex top-0 w-screen p-5 bg-black md:bg-transparent transition duration-300 z-50",
        { "md:bg-black": navDark }
      )}
    >
      <div className="relative w-full flex justify-between flex-col md:flex-row md:items-center">
        <div className="font-black text-4xl w-full">Appetizer</div>
        <div
          className={classNames(
            "flex flex-col md:flex-row md:w-full md:justify-end md:gap-8 md:h-auto md:items-center md:mr-8 transition-all duration-300 overflow-hidden",
            {
              "flex-row": !active,
            },
            {
              "h-0": !active,
            },
            {
              "h-full": active,
            }
          )}
        >
          <Scrollspy
            items={links.map((l) => l.href.slice(1))}
            className="gap-5 flex flex-col md:flex-row"
            currentClassName="text-yellow-400 p-3 md:p-0 pb-5"
          >
            {links.map((link) => (
              <a
                key={link.href + link.title}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.href.slice(1))
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                  setActive(false);
                }}
                className="hover:text-yellow-400 p-3 md:p-0 last-child:mb-5"
              >
                {link.title}
              </a>
            ))}
          </Scrollspy>
          <a
            href="#reservation"
            className="bg-yellow-400  fond-bold p-3 rounded-sm"
          >
            Book A Table
          </a>
        </div>
      </div>
      <div className="absolute top-5 right-5 md:hidden">
        {active ? (
          <Icons.XIcon
            className="w-10 h-10"
            onClick={() => setActive(!active)}
          />
        ) : (
          <Icons.MenuIcon
            className="w-10 h-10"
            onClick={() => setActive(!active)}
          />
        )}
      </div>
    </nav>
  );
}
