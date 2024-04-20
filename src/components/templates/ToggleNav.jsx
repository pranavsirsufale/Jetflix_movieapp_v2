import React from "react";
import { Link, NavLink } from "react-router-dom";

function ToggleNav() {
  return (
    <div className=" -left-[30%] h-auto top-[10vh] bg-[#1F1E24] absolute overflow-x-hidden p-20 z-50 toggle duration-1000">
      <nav className="flex flex-col gap-5 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mb-1 mt-1 ">
          {" "}
          New Feeds
        </h1>
        <NavLink
          to="/trending"
          className="bg-[#6556Cd] text-white p-3 rounded-lg"
        >
          {" "}
          <i className="ri-fire-fill"></i> Treanding{" "}
        </NavLink>
        <Link to="/popular" className="bg-[#6556Cd] text-white p-2 rounded-lg ">
          {" "}
          <i className="ri-bard-line"></i> Popular{" "}
        </Link>
        <Link to="/movie" className="bg-[#6556Cd] text-white p-3 rounded-lg ">
          {" "}
          <i className="ri-movie-2-fill"></i> movies{" "}
        </Link>
        <Link to="/tvshows" className="bg-[#6556Cd] text-white p-3 rounded-lg ">
          {" "}
          <i className="ri-tv-line"></i> TV shows{" "}
        </Link>
        <Link to="/people" className="bg-[#6556Cd] text-white p-3 rounded-lg ">
          {" "}
          <i className="ri-team-fill"></i> People{" "}
        </Link>
      </nav>
      <hr className="border-none h-[1px] mt-5 bg-zinc-400" />

      <nav className="flex flex-col gap-5 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold  mb-1 mt-5 "> About Us </h1>
        <Link to='/about' className="bg-[#6556Cd] text-white p-3 rounded-lg ">
          {" "}
          <i className="ri-information-fill"></i> About{" "}
        </Link>
        <Link className="bg-[#6556Cd] text-white p-3 rounded-lg ">
          {" "}
          <i className="ri-phone-fill"></i> Contact{" "}
        </Link>
      </nav>

      {/* End here   */}
    </div>
  );
}

export default ToggleNav;
