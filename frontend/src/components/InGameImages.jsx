import React ,{useState} from 'react'
import vswhite from "../assets/vswhite.svg";
import babar from "../assets/babar.svg";
import { Link } from "react-router-dom";
import tunisianFood from '../gamesData/tunisianFood';

const InGameImages = () => {
    const createChunks = (arr) => {
        let result = [];
        for (let i = 0; i < arr.length; i += 2) {
          result.push(arr.slice(i, i + 2));
        }
        return result;
      };
      const [chunkedArrays, setChunkedArrays] = useState(createChunks(tunisianFood));
      // State for selected items
      const [currentRound, setCurrentRound] = useState(0);
      const [chosen, setChosen] = useState(Array(chunkedArrays.length).fill(""));
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
        }
      };
  return (
    <div className="relative bg-gray-900 ">
      <Link to={"/"} className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </Link>
      <div className="absolute flex bottom-6 right-10">
        <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/What%20is%20Dark%20Mode%20and%20How%20to%20Turn%20it%20On%20or%20Off1648514558189227.jpg" className="w-14  rounded-full" />
      </div> 
      <div className="flex flex-col w-full h-screen justify-center items-center px-10">
        <div className="flex justify-end w-full my-7">
          <h1 className="text-sm text-gray-400 font-medium border-[1.5px] border-gray-500 px-4 py-1 rounded-[4px]">
          The best Spacetoon Song Tournament : Round  {currentRound + 1}/8
          </h1>
        </div>
        <div className="flex items-center w-full justify-between">
          <div>
            <div className="w-[640px] h-[360px]">
              <img
                className="w-full h-full object-cover"
                src={chunkedArrays[currentRound][0].imageLink}
              />
            </div>
            <div
              className={`flex justify-center py-4 cursor-pointer border-t border-sky-900 ${
                chosen[currentRound].name == chunkedArrays[currentRound][0].name
                  ? "bg-red-400"
                  : "bg-red-100 hover:bg-red-200"
              }`}
              onClick={() => handleSelect(chunkedArrays[currentRound][0])}
            >
              <h1 className="text-lg">{chunkedArrays[currentRound][0].name}</h1>
            </div>
          </div>
          {/* <img src={vs} className="h-28 w-28" /> */}
          {/* <div className="flex justify-center items-center h-28 w-28">
              <img src={vswhite} className="h-10 w-10"/>
          </div> */}
          
          <div>
            <div className="w-[640px] h-[360px]">
            <img
                className="w-full h-full object-cover"
                src={chunkedArrays[currentRound][1].imageLink}
              />
            </div>
            <div
              className={`flex justify-center py-4 cursor-pointer border-t border-sky-900 ${
                chosen[currentRound].name == chunkedArrays[currentRound][1].name
                  ? "bg-green-400"
                  : "bg-green-100 hover:bg-green-200"
              }`}
              onClick={() => handleSelect(chunkedArrays[currentRound][1])}
            >
              <h1 className="text-lg">{chunkedArrays[currentRound][1].name}</h1>
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
  )
}

export default InGameImages