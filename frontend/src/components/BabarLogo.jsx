import React from "react";
import { Link } from "react-router-dom";
import babar from "../assets/babar.svg";

const BabarLogo = () => {
  return (
    <Link to={"/"} className="absolute flex left-10 top-7 gap-1 z-10">
      <img src={babar} className="w-12" />
      <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
    </Link>
  );
};

export default BabarLogo;
