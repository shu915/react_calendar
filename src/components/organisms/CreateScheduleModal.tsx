import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { useCreateSchedule } from "../../hooks/useCreateSchedule";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  addSchedule: (schedule: Schedule) => void;
};

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "50vh",
  },
};

export const CreateScheduleModal = ({ isOpen, onRequestClose, addSchedule }: Props) => {
  const { newSchedule, errorMessage, changeSchedule, handleCreateSchedule } = useCreateSchedule({addSchedule, onRequestClose});

  return (
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onRequestClose}>
      <h3 className="text-center text-3xl text-lime-800 font-bold pb-5">
        予定作成
      </h3>
      {errorMessage && <p className="p-5 mb-5 rounded-lg bg-red-500 text-white text-center">{errorMessage}</p>}
      <form className="flex flex-col gap-8" onSubmit={handleCreateSchedule}>
        <div className="w-full flex items-center">
          <label htmlFor="title-form" className="w-[30%] text-line-800">
            タイトル
          </label>
          <Input
            id="title-form"
            name="title"
            type="text"
            value={newSchedule.title}
            onChange={changeSchedule}
          />
        </div>
        <div className="w-full flex items-center">
          <label htmlFor="date-form" className="w-[30%] text-line-800">
            日付
          </label>
          <Input
            id="date-form"
            name="date"
            type="date"
            value={newSchedule.date}
            onChange={changeSchedule}
          />
        </div>
        <div className="w-full flex items-center">
          <label htmlFor="description-form" className="w-[30%] text-line-800">
            内容
          </label>
          <TextArea
            id="description-form"
            name="description"
            value={newSchedule.description}
            onChange={changeSchedule}
          />
        </div>
        <div className="flex justify-center">
          <PrimaryBtn size="lg" onClick={() => null}>
            作成
          </PrimaryBtn>
        </div>
      </form>
    </Modal>
  );
};
