import { useState } from "react";

type Timeframe = "daily" | "weekly" | "monthly";

type Props = {
  setActiveTimeframe: React.Dispatch<React.SetStateAction<Timeframe>>;
  onTimeframeChange: (newTimeframe: Timeframe) => void;
};


const ProfileCard = ({ setActiveTimeframe }: Props) => {
  const [active, setActive] = useState<Timeframe>("weekly");

  const handleTimeframeClick = (timeframe: Timeframe) => {
    setActive(timeframe);
    setActiveTimeframe(timeframe);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleTimeframeClick("daily")}>Daily</button>
          </li>
          <li>
            <button onClick={() => handleTimeframeClick("weekly")}>Weekly</button>
          </li>
          <li>
            <button onClick={() => handleTimeframeClick("monthly")}>Monthly</button>
          </li>
        </ul>
      </nav>
      <h2>Report for {active}</h2>
    </div>
  );
};

export default ProfileCard;
