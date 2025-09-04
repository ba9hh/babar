import React from "react";
import { useLocation } from "react-router-dom";
import BabarLogo from "./BabarLogo";
const GameWinner = () => {
  const { state } = useLocation();
  const game = state?.game || [];
  return (
    <div className="relative bg-gray-900 ">
      <BabarLogo />
      <div className="flex flex-col w-full h-screen justify-center items-center px-10">
        <div className="flex justify-center w-full my-7">
          <h1 className="text-sm text-gray-400 font-medium border-[1.5px] border-gray-500 px-4 py-1 rounded-[4px]">
            The best Spacetoon Song Tournament winner is: {game[0].name}
          </h1>
        </div>
        <div className="flex items-center w-full justify-between">
          <div>
            <div className="w-[640px] h-[360px]">
              <img
                className="w-full h-full object-cover"
                src={game[0].imageLink}
              />
            </div>
            <div
              className={`flex justify-center py-4 cursor-pointer border-t border-sky-900 ${"bg-red-400"}`}
            >
              <h1 className="text-lg">{game[0].name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWinner;
