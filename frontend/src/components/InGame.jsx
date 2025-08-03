import React, { useEffect, useState } from "react";
import vswhite from "../assets/vswhite.svg";
import babar from "../assets/babar.svg";
import { Link } from "react-router-dom";

const InGame = () => {
  const createChunks = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2));
    }
    return result;
  };
  const [showAnimation, setShowAnimation] = useState(false);
  const [chunkedArrays, setChunkedArrays] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [chosen, setChosen] = useState(Array(chunkedArrays.length).fill(""));
useEffect(() => {
    async function loadData() {
      try {
        const cartoonsData = sessionStorage.getItem("cartoons");
      if (!cartoonsData) {
        console.warn("No cartoons data found in sessionStorage.");
        return;
      }
      const cartoons = JSON.parse(cartoonsData);
      const chunkedData = createChunks(cartoons);
      setChunkedArrays(chunkedData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, []);
  // Handle selection
  const handleSelect = (itemName) => {
    const newChosen = [...chosen];
    newChosen[currentRound] = itemName;
    setChosen(newChosen);
  };

  // Move to the next round
  const handleNext = () => {
    if (currentRound < chunkedArrays.length - 1) {
      setCurrentRound(currentRound + 1);
    } else {
      setChunkedArrays(createChunks(chosen));
      setChosen(Array(chunkedArrays.length).fill(""));
      setCurrentRound(0);
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 5000);
    }
  };
  console.log(JSON.parse(sessionStorage.getItem("cartoons")))
  return (
    <div className="relative bg-gray-900 ">
      <Link to={"/"} className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </Link>
      {/* <div className="absolute flex bottom-6 right-10">
        <img
          src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/What%20is%20Dark%20Mode%20and%20How%20to%20Turn%20it%20On%20or%20Off1648514558189227.jpg"
          className="w-14  rounded-full"
        />
      </div> */}
      <div className="flex flex-col w-full h-screen justify-center items-center px-10">
        {/* {showAnimation && (
         <div className="absolute flex flex-col w-full items-center h-20 bg-white border-y-8 border-black">
            <motion.div
              initial={{ x: "-100vw" }} // Start from the left
              animate={{ x: 0 }} // Move to center
              exit={{ x: "100vw" }} // Move to the right
              transition={{ duration: 1 }} // Smooth transition
              className="text-5xl font-bold text-gray-800"
            >
              Semi Final
            </motion.div>
          </div>
        )} */}
        {/* <div className="flex w-full justify-center">
        <h1 className="text-lg text-white border border-white px-16 py-1">The best Spacetoon Song Tournament</h1>
      </div> */}
        <div className="flex justify-end w-full my-7">
          <h1 className="text-sm text-gray-400 font-medium border-[1.5px] border-gray-500 px-4 py-1 rounded-[4px]">
            The best Spacetoon Song Tournament : Round {currentRound + 1}/8
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="w-[640px] h-[360px]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${chunkedArrays[currentRound]?.[0]?.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className={`flex justify-center py-4 cursor-pointer border-t border-sky-900 ${
                chosen[currentRound]?.name == chunkedArrays[currentRound]?.[0]?.name
                  ? "bg-red-400"
                  : "bg-red-100 hover:bg-red-200"
              }`}
              onClick={() => handleSelect(chunkedArrays[currentRound][0])}
            >
              <h1 className="text-lg">{chunkedArrays[currentRound]?.[0]?.name}</h1>
            </div>
          </div>
          {/* <img src={vswhite} className="h-28 w-28" /> */}
          {/* <div className="flex justify-center items-center h-28 w-28">
            <img src={vswhite} className="h-10 w-10" />
          </div> */}

          <div>
            <div className="w-[640px] h-[360px]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${chunkedArrays[currentRound]?.[1]?.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className={`flex justify-center py-4 cursor-pointer border-t border-sky-900 ${
                chosen[currentRound]?.name == chunkedArrays[currentRound]?.[1]?.name
                  ? "bg-green-400"
                  : "bg-green-100 hover:bg-green-200"
              }`}
              onClick={() => handleSelect(chunkedArrays[currentRound][1])}
            >
              <h1 className="text-lg">{chunkedArrays[currentRound]?.[1]?.name}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full py-10">
          <button
            disabled={!chosen[currentRound]}
            className={`w-full py-2 rounded-[4px] bg-gray-400 font-medium text-white ${
              chosen[currentRound] ? "bg-sky-600" : "bg-gray-400"
            }`}
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InGame;
