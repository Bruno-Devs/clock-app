import DayOfTheYear from "../atoms/DayOfTheYear";
import TimeZone from "../atoms/TimeZone";
import DayOfTheWeek from "../atoms/DayOfTheWeek";
import WeekNumber from "../atoms/WeekNumber";

const MoreDetails = ({ show = false, currentTimeZone }) => {
  const showClass = show ? "h-[40vh]" : "h-0";
  return (
    <div
      className={
        " bg-[#ffffffbf] backdrop-blur-[20.4px] fixed bottom-0 left-0 w-full transition-all " +
        showClass
      }
    >
      {show && (
        <div className=" flex flex-col uppercase text-[#303030] font-primaryFont text-right mt-[48px]  px-8 flex-wrap md:w=[538px] md:grid md:grid-cols-2 md:gap-y-4 md:pl-[4rem]">
          <div className="flex justify-between pt-[16px] md:flex-col md:items-start ">
            <p className="tracking-[2px] leading-[28px] text-[10px] md:text-[13px] md:font-normal md:tracking-[2.6px] ">
              CURRENT TIME ZONE
            </p>
            <div className="text-20px font-bold leading-normal  md:text-[40px] md:font-bold">
              <TimeZone currentTimeZone={currentTimeZone} />
            </div>
          </div>
          <div className="flex md:flex-col md:items-start justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px] md:text-[13px] md:font-normal md:tracking-[2.6px]">
              Day of the year
            </p>
            <div className="text-20px font-bold leading-normal md:text-[40px] md:font-bold">
              <DayOfTheYear />
            </div>
          </div>
          <div className="flex md:flex-col md:items-start justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px] md:text-[13px] md:font-normal md:tracking-[2.6px]">
              Day of the week
            </p>
            <div className="text-20px font-bold leading-normal md:text-[40px] md:font-bold">
              <DayOfTheWeek />
            </div>
          </div>
          <div className="flex md:flex-col md:items-start justify-between pt-[16px]">
            <p className="tracking-[2px] leading-[28px] text-[10px] md:text-[13px] md:font-normal md:tracking-[2.6px]">
              week number
            </p>
            <div className="text-20px font-bold leading-normal md:text-[40px] md:font-bold">
              <WeekNumber />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreDetails;
