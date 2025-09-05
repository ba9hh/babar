import React, { useState } from "react";
import vswhite from "../assets/vswhite.svg";
import babar from "../assets/babar.svg";
import { Link, useNavigate } from "react-router-dom";
import TournamentState from "./TournamentState";

const InGameImages = ({ data, tournamentName }) => {
  const [openTournamentState, setOpenTournamentState] = useState(false);
  // const [tournamentStateData, setTournamentStateData] = useState(data);
  const [tournamentStateQuarterFinal, setTournamentStateQuarterFinal] =
    useState([]);
  const [tournamentStateSemiFinal, setTournamentStateSemiFinal] = useState([]);
  const [tournamentStateFinal, setTournamentStateFinal] = useState([]);
  const [tournamentState, setTournamentState] = useState(1);
  const navigate = useNavigate();
  const createChunks = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2));
    }
    return result;
  };
  const [chunkedArrays, setChunkedArrays] = useState(createChunks(data));
  const [currentRound, setCurrentRound] = useState(0);
  const [chosen, setChosen] = useState(Array(chunkedArrays.length).fill(""));
  const handleSelect = (itemName) => {
    const newChosen = [...chosen];
    newChosen[currentRound] = itemName;
    setChosen(newChosen);
  };
  const handleNext = () => {
    if (chunkedArrays.length == 1) {
      navigate("/winner", { state: { game: chosen } });
    } else if (currentRound < chunkedArrays.length - 1) {
      setCurrentRound(currentRound + 1);
    } else if (tournamentState == 1) {
      setTournamentStateQuarterFinal(chosen);
      setTournamentState(2);
      const newChunks = createChunks(chosen);
      setChunkedArrays(newChunks);
      setChosen(Array(newChunks.length).fill(""));
      setCurrentRound(0);
      setOpenTournamentState(true);
    } else if (tournamentState == 2) {
      setTournamentStateSemiFinal(chosen);
      setTournamentState(3);
      const newChunks = createChunks(chosen);
      setChunkedArrays(newChunks);
      setChosen(Array(newChunks.length).fill(""));
      setCurrentRound(0);
      setOpenTournamentState(true);
    } else {
      setTournamentStateFinal(chosen);
      const newChunks = createChunks(chosen);
      setChunkedArrays(newChunks);
      setChosen(Array(newChunks.length).fill(""));
      setCurrentRound(0);
      setOpenTournamentState(true);
    }
  };
  console.log(data);
  console.log(chosen);
  return (
    <div className="relative bg-gray-900 ">
      <Link to={"/"} className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </Link>
      <div className="flex flex-col w-full h-screen justify-center items-center px-10">
        <div className="flex justify-end w-full my-7">
          <h1 className="text-sm text-gray-400 font-medium border-[1.5px] border-gray-500 px-4 py-1 rounded-[4px]">
            The best Spacetoon Song Tournament : Round {currentRound + 1}/
            {chunkedArrays?.length}
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
          <img src={vswhite} className="h-10 w-10 mx-4" />
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
      {openTournamentState && (
        <TournamentState
          tournamentName={tournamentName}
          close={() => setOpenTournamentState(false)}
          data={data}
          quarterFinal={tournamentStateQuarterFinal}
          semiFinal={tournamentStateSemiFinal}
          final={tournamentStateFinal}
        />
      )}
    </div>
  );
};

export default InGameImages;
