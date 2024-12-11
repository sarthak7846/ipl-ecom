import { useLocation, useNavigate } from "react-router";
import "./fade-in.css";
import { iplTeamThemes, TeamKey } from "@/data/iplTeamTheme";
import { useEffect, useState } from "react";
const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const iplTeam: TeamKey = location.state?.iplTeam;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!iplTeam) {
    // Redirect to /home if accessed without proper state
    navigate("/home");
    return null;
  }

  const clickHandler = () => {
    navigate("/home");
  };
  return (
    <div
      className={`w-screen h-screen ${isVisible ? "fade-in" : ""}`}
      style={iplTeamThemes[iplTeam].style.confPage}
    >
      <div className="flex flex-col items-center absolute  rounded-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-4 py-10 fade-in-inside">
        <img
          src={`/${iplTeam}Logo.png`}
          alt="team logo"
          className="w-48 object-contain rounded-2xl"
        />
        <p className="font-bold text-xl text-center my-2 text-yellow-300">
          You're assigned with team
        </p>
        <p className="text-5xl font-mono text-center font-bold my-2 text-white">
          {iplTeamThemes[iplTeam].title}
        </p>
        <button
          onClick={clickHandler}
          className="text-slate-200 font-bold rounded-md px-4 py-2 bg-green-700 hover:bg-green-600"
        >
          Explore the <span className="uppercase">{iplTeam}</span> Store
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
