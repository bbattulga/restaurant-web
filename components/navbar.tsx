import React, { useEffect, useState } from "react";
import * as Icons from "@heroicons/react/solid";
import classNames from "classnames";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  useEffect(() => {
    let lastOffsetY = 0;
    const onScroll = () => {
      let currentOffsetY = window.pageYOffset;
      if (window.pageYOffset < lastOffsetY) {
        // scrolled up
        setIsActive(true);
        console.log("scrolled up");
      } else {
        // scrolled down
        setIsNavVisible(false);
        console.log("scrolled down");
      }
      lastOffsetY = currentOffsetY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("listener", onScroll);
  }, []);
  return (
    <nav
      className={classNames(
        "hidden sm:block w-screen p-3 rounded-sm bg-black",
        {
          "top-0": isNavVisible,
          "-top-full": !isNavVisible,
        }
      )}
    >
      <div className="w-full flex justify-between items-center">
        {/* brand */}
        <div className="text-white text-3xl font-black">Appetizer</div>
        {/* nav */}
        <div className="flex flex-row">
          <div className="flex flex-row text-white">
            <ul
              className={classNames(
                "flex items-center mr-5 space-x-5 flex-row text-white",
                {}
              )}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* header CTA */}
          <div className="flex">
            <a
              href="#"
              className=" p-3 text-center rounded-md font-bold bg-yellow-400 text-white"
            >
              Book a table
            </a>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="sm:hidden">
        <div className={classNames("flex justify-between")}>
          <img
            className={classNames("h-5 w-5")}
            src="https://picsum.photos/50/50"
          />
          <div className="text-white" onClick={() => setIsActive(!isActive)}>
            {<Icons.MenuIcon className="text-white h-5 w-5" />}
          </div>
        </div>
        <div className={classNames({ "mt-5": isActive })}>
          <ul
            className={classNames("flex space-y-5 flex-col text-white", {
              hidden: !isActive,
            })}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
