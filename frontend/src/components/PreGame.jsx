import React, { useEffect, useState } from "react";
import babar from "../assets/babar.svg";
import { Link, useParams } from "react-router-dom";

const PreGame = () => {
  const { game } = useParams();
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        // Dynamically import the module from the data folder based on URL param
        const module = await import(`../gamesData/${game}.js`);
        setData(shuffleArray(module.default)); // assuming your file exports an array as default
        
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, [game]);
  // setData(shuffleArray(data))
  console.log(data);
  sessionStorage.setItem("cartoons", JSON.stringify(data));
  const onStartGame = () => {
    
  };
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 ">
      <Link to={"/"} className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </Link>
      <Link
        className="absolute flex bottom-0 justify-center w-full cursor-pointer"
        to={"/ingame"}
        onClick={()=>onStartGame}
      >
        <button className="w-full py-2 rounded-[4px] bg-sky-600 font-medium text-white cursor-pointer">
          Start now
        </button>
      </Link>
      <div className="absolute flex w-full justify-center top-12 px-36">
        <h1 className="text-gray-300 w-fit border border-gray-300 text-center px-28 py-1">
          Spacetoon best song tournament
        </h1>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[0]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[0]?.name}{" "}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[1]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[1]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 1/2
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[2]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[2]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[3]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[3]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 3/4
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center w-48">
              <div className="flex-grow border-t border-gray-500"></div>
              {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                team 1/2/3/4
              </span> */}
              <span className="px-3 text-gray-300 text-base w-fit font-medium">
                -----------
              </span>
              <div className="flex-grow border-t border-gray-500"></div>
              <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[4]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[4]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[5]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[5]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 5/6
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[6]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[6]?.name}{" "}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[7]?.imageLink}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[7]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 7/8
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
            </div>
            <div className=" relative flex items-center w-48">
              <div className="flex-grow border-t border-gray-500"></div>
              {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                team 5/6/7/8
              </span> */}
              <span className="px-3 text-gray-300 text-base w-fit font-medium">
                -----------
              </span>
              <div className="flex-grow border-t border-gray-500"></div>
              <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-48">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-3 text-gray-300 text-base w-fit font-medium">
            -----------
          </span>
          {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
            team 5/6/7/8
          </span> */}
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
      </div>
      {/*  */}
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative flex justify-center items-center w-48">
              <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="px-3 text-gray-300 text-base w-fit font-medium">
                -----------
              </span>
              {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                team 1/2/3//4
              </span> */}
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative flex items-center justify-center w-48">
                  <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 1/2
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[8]?.name}
                    </span>
                    <img
                      src={data[8]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[9]?.name}
                    </span>
                    <img
                      src={data[9]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 3/4
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[10]?.name}
                    </span>
                    <img
                      src={data[10]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[11]?.name}
                    </span>
                    <img
                      src={data[11]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex justify-center items-center w-48">
              <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
              <div className="flex-grow border-t border-gray-500"></div>
              {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                team 5/6/7/8
              </span> */}
              <span className="px-3 text-gray-300 text-base w-fit font-medium">
                -----------
              </span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 5/6
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[12]?.name}
                    </span>
                    <img
                      src={data[12]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[13]?.name}
                    </span>
                    <img
                      src={data[13]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    team 7/8
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit font-medium">
                    -----------
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[14]?.name}
                    </span>
                    <img
                      src={data[14]?.imageLink}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit font-medium">
                      {data[15]?.name}
                    </span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_28a01fBzBLHfA94O3x5boOMo9EojJ41hqA&s"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreGame;
