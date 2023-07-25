import DayOfTheYear from "../component/atoms/DayOfTheYear"
import TimeZone from "../component/atoms/TimeZone"
import DayOfTheWeek from "../component/atoms/DayOfTheWeek"

const MoreDetails = () => {
  return (
    <div className='bg-white'>
      <TimeZone />
      <DayOfTheYear />
      <DayOfTheWeek />
      <weekNumber />
    </div>
  )
}

export default MoreDetails
