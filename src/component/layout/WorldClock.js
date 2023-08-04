import { useEffect, useState } from "react";
import Greeting from "../atoms/Greeting";
import Location from "../atoms/Location";
import DropDownButton from "../atoms/DropDownButton";
import TimeZone from "../atoms/TimeZone";
import MoreDetails from "../organism/MoreDetails";

const WorldClock = ({ show, toggleVisibility }) => {
  const [currentTimeZone, setCurrentTimeZone] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [dayOfTheYear, setdayOfTheYear] = useState();
  const [dayOfTheWeek, setdayOfTheWeek] = useState();
  const [weekNumber, setWeekNumber] = useState();
  

  useEffect(() => {
    const fetchWorldClock = async () => {
      try {
        const res = await fetch("http://worldtimeapi.org/api/ip");
        const data = await res.json();
        setCurrentTimeZone(shortTimeZone(data.timezone));
        setdayOfTheYear(data.day_of_year);
        setdayOfTheWeek(data.day_of_week + 1);
        setWeekNumber(data.week_number);
      } catch (error) {
        console.error("Error fetching world clock data:", error);
      }
    };
    fetchWorldClock();

    const clock = () => {
      let time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(time);
    };

    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

  const shortTimeZone = (timezone) => {
    const offset = new Date()
      .toLocaleTimeString("en", { timeZone: timezone, timeZoneName: "short" })
      .split(" ")[2];
    return `${offset}`;
  };

  const visibleClass = show ? "pt-[96px]" : "pt-[14rem] md:pt-96 lg:pt-[183px]";
  return (
    <div className="md:pt-[93px] lg:pt-[26px]">
      <div
        className={
          "text-white transition-all pl-[20px] w-full flex flex-col md:pl-[4rem] lg:pl-[165px] " +
          visibleClass
        }
      >
        <Greeting />
        <div className="flex flex-col md:pt-6">
          <div className="flex">
            <div className="font-primaryFont text-[75px] font-bold leading-[100px] md:text-[175px] md:h-[125px] md:pt-4 tracking-[-4.37px]">
              {currentTime}
            </div>
            <div className="self-end font-primaryFont font-light text-[13px] leading-[28px] uppercase pb-[10px] md:text-[32px] ">
              <TimeZone currentTimeZone={currentTimeZone} />
            </div>
          </div>
          <div className="lg:flex">
            <Location />
            <DropDownButton
              visible={show}
              onClick={toggleVisibility}
              currentDayofTheYear={dayOfTheYear}
              currentDayofTheweek={dayOfTheWeek}
              currentNumberofWeek={weekNumber}
            />
          </div>
        </div>
      </div>
      <MoreDetails show={show} currentTimeZone={currentTimeZone} />
    </div>
  );
};

export default WorldClock;
