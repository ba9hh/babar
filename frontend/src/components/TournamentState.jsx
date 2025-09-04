import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BabarLogo from "./BabarLogo";
import vswhite from "../assets/vswhite.svg";

const TournamentState = ({
  close,
  data,
  quarterFinal = [],
  semiFinal = [],
  final = [],
}) => {
  console.log(data);
  console.log(quarterFinal);
  return (
    <div className="absolute inset-0 flex justify-center items-center min-h-screen bg-gray-900 ">
      <BabarLogo />
      <button
        className="absolute bottom-0 w-full py-2 rounded-[4px]
                 bg-sky-600 font-medium truncate text-white cursor-pointer"
        onClick={close}
      >
        Continue
      </button>
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
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate ">
                      {data[0]?.name}{" "}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[1]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[1]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 1/2
                  </span> */}
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[0]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[0]?.name
                      : "-----------"}
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
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[2]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[3]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[3]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 3/4
                  </span> */}
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[1]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[1]?.name
                      : "-----------"}
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center w-48">
              <div className="flex-grow border-t border-gray-500"></div>
              {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                team 1/2/3/4
              </span> */}
              {semiFinal?.length > 0 ? (
                <img
                  src={semiFinal[0]?.imageLink}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                ""
              )}
              <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                {semiFinal?.length > 0 ? semiFinal[0]?.name : "-----------"}
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
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[4]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[5]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[5]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 5/6
                  </span> */}
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[2]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[2]?.name
                      : "-----------"}
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
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[6]?.name}{" "}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute bottom-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                  <div className="relative flex items-center w-48">
                    <img
                      src={data[7]?.imageLink}
                      className="h-10 w-10 object-cover rounded-full object-cover"
                    />
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[7]?.name}
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-48">
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 7/8
                  </span> */}
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[3]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[3]?.name
                      : "-----------"}
                  </span>
                  <div className="flex-grow border-t border-gray-500"></div>
                  <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
                </div>
              </div>
            </div>
            <div className=" relative flex items-center w-48">
              <div className="flex-grow border-t border-gray-500"></div>
              {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                team 5/6/7/8
              </span> */}
              {semiFinal?.length > 0 ? (
                <img
                  src={semiFinal[1]?.imageLink}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                ""
              )}
              <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                {semiFinal?.length > 0 ? semiFinal[1]?.name : "-----------"}
              </span>
              <div className="flex-grow border-t border-gray-500"></div>
              <div className="absolute top-0 right-0 h-1/2 border-r border-gray-500"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="flex items-center w-48">
            <div className="flex-grow border-t border-gray-500"></div>
            {final?.length > 0 ? (
              <img
                src={final[0]?.imageLink}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              ""
            )}
            <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
              {final?.length > 0 ? final[0]?.name : "-----------"}
            </span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <img src={vswhite} className="h-10 w-10 mx-auto" />
          <div className="flex items-center w-48">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
              {final?.length > 0 ? final[1]?.name : "-----------"}
            </span>
            {final?.length > 0 ? (
              <img
                src={final[1]?.imageLink}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              ""
            )}
            {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
            team 5/6/7/8
          </span> */}
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative flex justify-center items-center w-48">
              <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                {semiFinal?.length > 0 ? semiFinal[2]?.name : "-----------"}
              </span>
              {semiFinal?.length > 0 ? (
                <img
                  src={semiFinal[2]?.imageLink}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                ""
              )}
              {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                team 1/2/3//4
              </span> */}
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative flex items-center justify-center w-48">
                  <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 1/2
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[4]?.name
                      : "-----------"}
                  </span>
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[4]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[8]?.name}
                    </span>
                    <img
                      src={data[8]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[9]?.name}
                    </span>
                    <img
                      src={data[9]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 3/4
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[5]?.name
                      : "-----------"}
                  </span>
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[5]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[10]?.name}
                    </span>
                    <img
                      src={data[10]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[11]?.name}
                    </span>
                    <img
                      src={data[11]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
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
              {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                team 5/6/7/8
              </span> */}
              <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                {semiFinal?.length > 0 ? semiFinal[3]?.name : "-----------"}
              </span>
              {semiFinal?.length > 0 ? (
                <img
                  src={semiFinal[3]?.imageLink}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                ""
              )}
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 5/6
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[6]?.name
                      : "-----------"}
                  </span>
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[6]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[12]?.name}
                    </span>
                    <img
                      src={data[12]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[13]?.name}
                    </span>
                    <img
                      src={data[13]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex justify-center items-center w-48">
                  <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                  <div className="flex-grow border-t border-gray-500"></div>
                  {/* <span className="px-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                    team 7/8
                  </span> */}
                  <span className="px-3 text-gray-300 text-base w-fit max-w-24 font-medium truncate">
                    {quarterFinal?.length > 0
                      ? quarterFinal[7]?.name
                      : "-----------"}
                  </span>
                  {quarterFinal?.length > 0 ? (
                    <img
                      src={quarterFinal[7]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="flex flex-col py-5">
                  <div className="relative flex items-center w-48">
                    <div className="absolute bottom-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[14]?.name}
                    </span>
                    <img
                      src={data[14]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="relative flex items-center w-48">
                    <div className="absolute top-0 left-0 h-1/2 border-l border-gray-500"></div>
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-3 py-3 text-gray-300 text-base w-fit max-w-32 font-medium truncate">
                      {data[15]?.name}
                    </span>
                    <img
                      src={data[15]?.imageLink}
                      className="h-10 w-10 rounded-full object-cover"
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

export default TournamentState;
