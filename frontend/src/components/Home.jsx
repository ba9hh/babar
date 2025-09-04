import React from "react";
import babar from "../assets/babar.svg";
import babarGames from "../babarGames";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="absolute flex left-10 top-7 gap-1">
        <img src={babar} className="w-12" />
        <h1 className="text-2xl font-medium text-gray-300">BABAR</h1>
      </div>
      <div className="absolute flex right-10 top-10 gap-1">
        <button className="py-2.5 px-4 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium">
          Suggest game
        </button>
      </div>
      <div className="flex w-full justify-center gap-3 pb-10 pt-10">
        <h1 className="text-white">All games</h1>
        <h1 className="text-gray-400">Tunisian games</h1>
        <h1 className="text-gray-400">Anime games</h1>
        <h1 className="text-gray-400">TV shows games</h1>
        <h1 className="text-gray-400">Movies games</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-center text-white bg-sky-800 w-fit px-1.5">
          “In case you encounter an unfamiliar element in any game, this is a
          great opportunity to discover it.”
        </h1>
      </div>
      {/* <h1 className='text-center text-white'> Albert Einstein</h1> */}
      <div className="grid grid-cols-3 gap-x-10 gap-y-10 px-16 pt-10 pb-10">
        {babarGames.map((game, index) => (
          <Link to={`/games/${game.uri}`} key={index}>
            <img
              className="w-[640px] aspect-[16/9] object-cover"
              src={game.imageLink}
            />
            <h1 className="text-white py-2">{game.name}</h1>
          </Link>
        ))}
        {/* <div>
          <img src="https://i.ytimg.com/vi/JOz8CVQjTuA/maxresdefault.jpg" />
          <h1 className="text-white">Spacetoon best song</h1>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/KPLWWIOCOOQ/maxresdefault.jpg" />
          <h1 className="text-white">Game of thrones best character</h1>
        </div>
        <div>
          <img
            className="w-[640px] aspect-[16/9] object-cover"
            src="https://s.yimg.com/ny/api/res/1.2/3g_lz0qkyl5oM5lqmC4PDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04OTA-/https://media.zenfs.com/en/us_magazine_896/b136ee339eea25252ea8169cb8c9bc88"
          />
          <h1 className="text-white">Hollywood hottest actress</h1>
        </div>
        <div>
          <img
            className="w-[640px] aspect-[16/9] object-cover"
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/attackontitan_anime_colossustitan_eren.jpg"
          />
          <h1 className="text-white">Anime best anime</h1>
        </div>
        <div>
          <img src="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/08/16/one-piece-gear-5-luffy.jpeg" />
          <h1 className="text-white">Anime best character</h1>
        </div>
        <div>
          <img src="https://dnm.nflximg.net/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcLaEOs_lxVRDkGymPc0ZSiEPszCyFbMYNlwWc3zK0FXKM6I-5KCSvxKhC7ms86vsAbiQ7Eh_Lv_PEg03M_4FP374hUerHVAHY-F.jpg?r=002" />
          <h1 className="text-white">Netflix best to watch</h1>
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg" />
          <h1 className="text-white">TV Show best TV show</h1>
        </div>
        <div>
          <img src="https://miro.medium.com/v2/resize:fit:2560/1*pbqVPZcMUy2rcj5OL_GSoA.jpeg" />
          <h1 className="text-white">Tunisia best street food</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
