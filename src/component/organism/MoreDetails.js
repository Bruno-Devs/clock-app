import DayOfTheYear from "../atoms/DayOfTheYear";
import TimeZone from "../atoms/TimeZone";
import DayOfTheWeek from "../atoms/DayOfTheWeek";
import WeekNumber from "../atoms/WeekNumber"

const MoreDetails = ({ show = false, currentTimeZone }) => {
  const showClass = show ? "pt-2 h-[55vh]" : "h-0";
  return (
    <div
      className={
        "bg-[#ffffffbf] backdrop-blur-[20.4px]  transition-all " + showClass
      }
    >
      {show && (
        <div className=" flex flex-col uppercase font-primaryFont text-right mt-[48px] px-8">
          <div className="flex justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px]">
              CURRENT TIME ZONE
            </p>
            <div className="text-20px leading-normal">
              <TimeZone currentTimeZone={currentTimeZone} />
            </div>
          </div>
          <div className="flex justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px]">
              Day of the year
            </p>
            <div className="text-20px leading-normal">
              <DayOfTheYear />
            </div>
          </div>
          <div className="flex justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px]">
              Day of the week
            </p>
            <div className="text-20px leading-normal">
              <DayOfTheWeek />
            </div>
          </div>
          <div className="flex justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px]">
              week number
            </p>
            <div className="text-20px leading-normal">
              <WeekNumber />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreDetails;
