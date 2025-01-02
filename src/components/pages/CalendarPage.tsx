import { eachWeekOfInterval, eachDayOfInterval, endOfMonth, endOfWeek, getMonth, startOfMonth, isSameDay } from "date-fns";
import { useState, useEffect, useMemo } from "react";
import { CalenderHeader } from "../organisms/CalenderHeader";
import { CalenderBody } from "../organisms/CalenderBody";
import { DateList, Schedule } from "../../types/calendar";
import { getScheduleList } from "../../api/calendar";

export const CalendarPage = () => {
  const today = useMemo(() => new Date(), []);
  const [dateList, setDateList] = useState<DateList>([]);

  

  useEffect(() => {
    const sundayListOfMonth = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    })
    const newDateList: DateList = sundayListOfMonth.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      }).map((date) => ({date, schedules: [] as Schedule[]}))
      })
      
    const scheduleList = getScheduleList();
      
      scheduleList.forEach((schedule) => {
        const firstIndex = newDateList.findIndex(oneWeek => {
          return oneWeek.some(item => isSameDay(item.date, schedule.date));
        })
        console.log(firstIndex);
        if (firstIndex === -1) {
          return;
        }
        const secondIndex = newDateList[firstIndex].findIndex(item => isSameDay(item.date, schedule.date));
        if (secondIndex === -1) {
          return;
        }
        newDateList[firstIndex][secondIndex].schedules = [...newDateList[firstIndex][secondIndex].schedules, schedule];
      })
      setDateList(newDateList);
    console.log(newDateList);
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
