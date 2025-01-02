import { getMonth } from "date-fns";
import { useCalender } from "../../hooks/useCalender";
import { CalendarHeader } from "../organisms/CalendarHeader";
import { CalendarBody } from "../organisms/CalendarBody";
import { useState } from "react";
import { CalendarNav } from "../organisms/CalendarNav";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const {dateList} = useCalender({currentDate: currentDate});

  return (
    <>
      <h1 className="font-bold text-3xl mb-5">{getMonth(currentDate) + 1}月</h1>
      <CalendarNav />
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
        <CalendarHeader />
        <CalendarBody dateList={dateList} currentDate={currentDate} />
      </table>
      
    </>
  )
}
