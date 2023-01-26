import React from "react";
import requests from "../utils/requests";

function Nav() {
  return (
    <nav className="relative">
      <div className="flex px-4 space-x-10 overflow-x-scroll text-xl sm:space-x-20 whitespace-nowrap sm:px-10 lg:px-20 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
