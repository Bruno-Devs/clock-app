import { useEffect, useState } from "react";
import Greeting from "../atoms/Greeting";
import Location from "../atoms/Location";
import DropDownButton from "../atoms/DropDownButton";
import TimeZone from "../atoms/TimeZone";
import MoreDetails from "../../organism/MoreDetails";

const WorldClock = () => {
  const [currentTimeZone, setCurrentTimeZone] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [dayOfTheYear, setdayOfTheYear] = useState();
  const [dayOfTheWeek, setdayOfTheWeek] = useState();
  const [weekNumber, setWeekNumber] = useState();
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

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

  const visibleClass = visible ? "pt-0" : "pt-[14rem] md:pt-96 lg:pt-[233px]";
  return (
    <div>
      <div
        className={
          "text-white transition-all pl-[2rem] w-full flex flex-col md:pl-[4rem]  " +
          visibleClass
        }
      >
        <Greeting />
        <div className="flex flex-col md:pt-6">
          <div className="flex">
            <div className="font-primaryFont text-[100px] font-bold leading-[100px] md:text-[175px]">
              {currentTime}
            </div>
            <div className="self-end font-primaryFont font-light text-[15px] leading-[28px] uppercase pb-[10px] md:text-[36px] md:p-0">
              <TimeZone currentTimeZone={currentTimeZone} />
            </div>
          </div>
          <div className="lg:flex">
            <Location />
            <DropDownButton
              visible={visible}
              onClick={toggleVisibility}
              currentDayofTheYear={dayOfTheYear}
              currentDayofTheweek={dayOfTheWeek}
              currentNumberofWeek={weekNumber}
            />
          </div>
        </div>
      </div>
      <MoreDetails show={visible} />
    </div>
  );
};

export default WorldClock;
