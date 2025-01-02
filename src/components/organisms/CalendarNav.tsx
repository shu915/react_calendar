import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { PrimaryBtn } from "../atoms/PrimaryBtn"
import { Dispatch, SetStateAction } from "react";
import { addMonths, subMonths } from "date-fns";

type Props = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

export const CalendarNav = ({setCurrentDate }: Props) => {
  const changeToday = () => setCurrentDate(new Date());
  const changePrevMonth = () => setCurrentDate(prevDate => subMonths(prevDate, 1));
  const changeNextMonth = () => setCurrentDate(prevDate => addMonths(prevDate, 1));


  return (
    <div className="w-[80%] flex justify-between mb-2">
      <div className="flex items-center text-white gap-4">
        <FaArrowAltCircleLeft className="text-lime-800 text-2xl" onClick={changePrevMonth} />
        <PrimaryBtn size="sm" onClick={changeToday}>今月</PrimaryBtn>
        <FaArrowAltCircleRight className="text-lime-800 text-2xl" onClick={changeNextMonth} />
      </div>
    </div>
  )
}
