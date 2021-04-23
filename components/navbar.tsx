import React, { useState } from "react";
import * as Icons from "@heroicons/react/solid";
import classNames from "classnames";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-screen p-3 rounded-sm bg-black">
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
    </nav>
  );
}
