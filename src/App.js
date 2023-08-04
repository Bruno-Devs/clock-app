import React, { useState } from "react";
import Quotes from "./component/layout/Quotes";
import WorldClock from "./component/layout/WorldClock";

const App = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <div className="bg-body bg-center bg-cover h-screen w-screen fixed">
      <div className="bg-[rgba(0,0,0,0.34)] h-screen w-screen">
        {showMoreDetails ? null : <Quotes />}
        <div className="w-full">
          <div>
            <WorldClock
              show={showMoreDetails}
              toggleVisibility={toggleMoreDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
