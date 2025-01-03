import { format, parse } from "date-fns";
import { useState } from "react";
import { NewSchedule, Schedule } from "../types/calendar";

type Props = {
  addSchedule: (schedule: Schedule) => void;
  onRequestClose: () => void;
}

const INIT_SCHEDULE: NewSchedule = {
  date: format(new Date(), "yyyy-MM-dd"),
  title: "",
  description: "",
}

export const useCreateSchedule = ({addSchedule, onRequestClose}: Props) => {
  const [newSchedule, setNewSchedule] = useState<NewSchedule>(INIT_SCHEDULE);

  const [errorMessage, setErrorMessage] = useState<string>("");


  const changeSchedule = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSchedule = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, date, description } = newSchedule;
    if (title === "") {
      setErrorMessage("タイトルを入力してください");
      return;
    } else {
      setErrorMessage("");
    }
    const schedule: Schedule = {
      id: 10001,
      title,
      date: parse(date, "yyyy-MM-dd", new Date()),
      description,
    }
    addSchedule(schedule);
    setNewSchedule(INIT_SCHEDULE);

    onRequestClose();
  }

  return {
    newSchedule,
    errorMessage,
    changeSchedule,
    handleCreateSchedule,
  }
}