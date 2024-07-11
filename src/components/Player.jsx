import React from "react";
import { assets, songsData } from "../assets/assets";

function Player() {
  return (
    <div className="h-[10%] bg-slate-950 flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={songsData[0].image} className="w-12 " alt="" />

        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className=" flex gap-4 ">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer "
            alt=""
          />
          <img src={assets.prev_icon} className="w-4 cursor-pointer " alt="" />
          <img src={assets.play_icon} className="w-4 cursor-pointer " alt="" />
          <img src={assets.next_icon} className="w-4 cursor-pointer " alt="" />
          <img src={assets.loop_icon} className="w-4 cursor-pointer " alt="" />
        </div>

        <div className="flex items-center  gap-5 ">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-10 bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 ">
        <img src={assets.plays_icon} className="w-4 " alt="" />
        <img src={assets.mic_icon} className="w-4 " alt="" />
        <img src={assets.queue_icon} className="w-4 " alt="" />
        <img src={assets.volume_icon} className="w-4 " alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} className="w-4 " alt="" />
        <img src={assets.zoom_icon} className="w-4 " alt="" />
      </div>
    </div>
  );
}

export default Player;
