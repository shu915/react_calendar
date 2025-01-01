import { eachWeekOfInterval, eachDayOfInterval, endOfMonth, endOfWeek, getMonth, startOfMonth } from "date-fns";
import { useState, useEffect, useMemo } from "react";
import { CalenderHeader } from "../organisms/CalenderHeader";
import { CalenderBody } from "../organisms/CalenderBody";

export const CalendarPage = () => {
  const today = useMemo(() => new Date(), []);
  const [dateList, setDateList] = useState<Date[][]>([]);

  

  useEffect(() => {
    const sundayListOfMonth = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    })
    const newDateList = sundayListOfMonth.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      })
    })
    setDateList(newDateList);
  }, [today]);
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
