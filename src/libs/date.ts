import { isSameMonth, isToday } from "date-fns";

export const dateColor = (target: Date, currentDate: Date) => {
  if (isToday(target)) {
    return "bg-lime-800 text-white rounded-full";
  }
  return isSameMonth(target, currentDate) ? "text-black" : "text-gray-300";
}