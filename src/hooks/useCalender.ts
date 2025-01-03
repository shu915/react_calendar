import { useEffect, useState } from "react";
import { DateList, Schedule } from "../types/calendar";
import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, isSameDay, startOfMonth } from "date-fns";
import { getScheduleList } from "../api/calendar";

type Props = {
  currentDate: Date;
}

export const useCalender = ({currentDate}: Props) => {
  const [dateList, setDateList] = useState<DateList>([]);

  const getDateListIndex = (currentDateList: DateList, schedule: Schedule): number[] => {
    const firstIndex = currentDateList.findIndex(oneWeek => {
      return oneWeek.some(item => isSameDay(item.date, schedule.date));
    })
    console.log(firstIndex);
    if (firstIndex === -1) {
      return [-1, -1];
    }
    const secondIndex = currentDateList[firstIndex].findIndex(item => {
      return isSameDay(item.date, schedule.date);
    })
    if (secondIndex === -1) {
      return [-1, -1];
    }
    return [firstIndex, secondIndex];
  }

  const addSchedule = (schedule: Schedule) => {
    const newDateList = [...dateList];
    const [firstIndex, secondIndex] = getDateListIndex(newDateList, schedule);
    if (firstIndex === -1) {
      return;
    }
    newDateList[firstIndex][secondIndex].schedules = [...newDateList[firstIndex][secondIndex].schedules, schedule];
    setDateList(newDateList);
  }


  useEffect(() => {
    const sundayListOfMonth = eachWeekOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate),
    })
    const newDateList: DateList = sundayListOfMonth.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      }).map((date) => ({
        date, schedules: [] as Schedule[] }))
    })
      
    const scheduleList = getScheduleList();
      
    scheduleList.forEach((schedule) => {
      const [firstIndex, secondIndex] = getDateListIndex(newDateList, schedule);
      if (firstIndex === -1) {
        return;
      }
      newDateList[firstIndex][secondIndex].schedules = [...newDateList[firstIndex][secondIndex].schedules, schedule];
    })
    setDateList(newDateList);
    console.log(newDateList);
  }, [currentDate]);

  return {dateList, addSchedule};
}
