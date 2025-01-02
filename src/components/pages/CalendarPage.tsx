import { getMonth } from "date-fns";
import { useCalender } from "../../hooks/useCalender";
import { CalenderHeader } from "../organisms/CalenderHeader";
import { CalenderBody } from "../organisms/CalenderBody";

export const CalendarPage = () => {
  const today = new Date();
  const {dateList} = useCalender({currentDate: today});
  
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">{getMonth(today) + 1}月</h1>
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
        <CalenderHeader />
        <CalenderBody dateList={dateList} currentDate={today} />
      </table>
      
    </>
  )
}
