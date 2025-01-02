import { DAYS_LIST } from "../../constants/calender";

export const CalendarHeader = () => {
  return (
    <thead>
          <tr className="bg-lime-800 text-white rounded-tl-lg rounded-tr-lg py-10">
            {DAYS_LIST.map((day) => (
              <th className="text-center text-xl py-3" key={day}>{day}</th>
            ))}
          </tr>

        </thead>
  )
}
