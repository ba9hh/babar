import React, { useEffect, useState } from "react";
import vswhite from "../assets/vswhite.svg";
import babar from "../assets/babar.svg";
import { Link, useLocation } from "react-router-dom";
import InGameImages from "./InGameImages";
import InGameVideos from "./InGameVideos";

const InGame = () => {
  const { state } = useLocation();
  const game = state?.game || [];
  const arrayHasYoutubeId = (array) => {
    return array.some((item) => "youtubeId" in item);
  };
  return (
    <div className="relative bg-gray-900 ">
      <Link to={"/"} className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </Link>
      {arrayHasYoutubeId(game) ? (
        <InGameVideos data={game} />
      ) : (
        <InGameImages data={game} />
      )}
    </div>
  );
};

export default InGame;
