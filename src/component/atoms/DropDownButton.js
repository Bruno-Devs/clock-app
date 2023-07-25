import React, { useState } from "react";
import MoreDetails from "../../organism/MoreDetails";

const DropDownButton = ({
  currentDayofTheYear,
  currentDayofTheweek,
  currentNumberofWeek,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-white rounded-[28px] mt-9  h-[2.5rem] w-24 lg:mb-12 lg:ml-[727px]">
      <button onClick={toggleVisibility} className="pl-1 pt-1 flex flex-row">
        <p className="font-primaryFont text-[16px] font-bold leading-[28px] uppercase text-[#000] pl-2  self-center">
          {visible ? "more" : "less"}
        </p>
        <div className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#303030" />
            <path d="M14 17L20 23L26 17" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default DropDownButton;
