import { eachWeekOfInterval, eachDayOfInterval, endOfMonth, endOfWeek, getMonth, startOfMonth, format, getDate, isToday, isSameMonth } from "date-fns";
import { DAYS_LIST } from "../../constants/calender";
import { useState, useEffect, useMemo } from "react";


export const CalendarPage = () => {
  const today = useMemo(() => new Date(), []);
  const [dateList, setDateList] = useState<Date[][]>([]);

  const dateColor = (target: Date, currentDate: Date) => {
    if (isToday(target)) {
      return "bg-lime-800 text-white rounded-full";
    }
    return isSameMonth(target, currentDate) ? "text-black" : "text-gray-300";
  }

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
    console.log(newDateList);
  }, [today]);
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">{getMonth(today) + 1}月</h1>
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
        <thead>
          <tr className="bg-lime-800 text-white rounded-tl-lg rounded-tr-lg py-10">
            {DAYS_LIST.map((day) => (
              <th className="text-center text-xl py-3" key={day}>{day}</th>
            ))}
          </tr>

        </thead>
        <tbody>
          {dateList.map((week) => (
            <tr key={`week-${getDate(week[0])}`} className="mx-10">
              {week.map((date) => (
                <td key={`date-${getDate(date)}`} className=" bg-white h-[10vh] border-2 border-solid border-lime-800 align-top">
                  <span className={`inline-block w-[20px] leading-[20px] text-center ${dateColor(date, today)}`}>
                    {getDate(date)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  )
}
