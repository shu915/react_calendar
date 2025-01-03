import { getDate } from "date-fns";
import { dateColor } from "../../libs/date";
import { DateList, Schedule } from "../../types/calendar";
import { ScheduleBtn } from "../atoms/ScheduleBtn";
import { useState } from "react";
import { ScheduleDetailModal } from "./ScheduleDetailModal";
type Props = {
  dateList: DateList;
  currentDate: Date;
}

export const CalendarBody = ({ dateList, currentDate }: Props) => {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  const closeModal = () => {
    setSelectedSchedule(null);
  }
  return (
    <>
    <tbody>
          {dateList.map((week) => (
            <tr key={`week-${getDate(week[0].date)}`} className="mx-10">
              {week.map((date) => (
                <td key={`date-${getDate(date.date)}`} className=" bg-white h-[10vh] border-2 border-solid border-lime-800 align-top">
                  <span className={`inline-block w-[20px] leading-[20px] text-center ${dateColor(date.date, currentDate)}`}>
                    {getDate(date.date)}
                  </span>
                  <div className="flex flex-col items-center gap-1 pb-2">

                  {date.schedules.map((schedule) => (
                    <ScheduleBtn key={schedule.id} onClick={() => setSelectedSchedule(schedule)}>
                      {schedule.title}
                    </ScheduleBtn>
                  ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
    </tbody>
    <ScheduleDetailModal closeModal={closeModal} selectedSchedule={selectedSchedule} />
    </>
  )
}
