import DayOfTheYear from "../component/atoms/DayOfTheYear";
import TimeZone from "../component/atoms/TimeZone";
import DayOfTheWeek from "../component/atoms/DayOfTheWeek";

const MoreDetails = ({ show = false }) => {
  const showClass = show ? "pt-2 h-[55vh]" : "h-0";
  return <div className={"bg-white  transition-all " + showClass}></div>;
};

export default MoreDetails;
