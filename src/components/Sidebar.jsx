import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-slate-900 h-[15%] rounded flex flex-col justify-around ">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6 " src={assets.home_icon} alt="" />
          <p className="font-bold">home </p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6 " src={assets.search_icon} alt="" />
          <p className="font-bold">Search </p>
        </div>
      </div>

      <div className="bg-slate-800 h-[85%]  rounded ">
        <div className="p-4 flex items-center justify-between ">
          <div className="flex items-center gap-3 ">
            <img src={assets.stack_icon} className="w-8" alt="" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3 ">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-slate-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ">
          <h1>Create Your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="bg-slate-500 text-black px-4 py-2 rounded mt-4">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-slate-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ">
          <h1>find postcast to follow </h1>
          <p className="font-light">We will keep you update</p>
          <button className="bg-slate-500 text-black px-4 py-2 rounded mt-4">
            Browse postcast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
