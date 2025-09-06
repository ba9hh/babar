import { useLocation } from "react-router-dom";
import InGameImages from "./InGameImages";
import InGameVideos from "./InGameVideos";
import BabarLogo from "./BabarLogo";

const InGame = () => {
  const { state } = useLocation();
  const game = state?.game || [];
  const tournamentName = state?.tournamentName || "";
  const arrayHasYoutubeId = (array) => {
    return array.some((item) => "youtubeId" in item);
  };
  return (
    <div className="relative bg-gray-900 ">
      <BabarLogo />
      {arrayHasYoutubeId(game) ? (
        <InGameVideos data={game} tournamentName={tournamentName} />
      ) : (
        <InGameImages data={game} tournamentName={tournamentName} />
      )}
    </div>
  );
};

export default InGame;
