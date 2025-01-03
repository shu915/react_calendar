import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { format } from "date-fns";

type Props = {
  closeModal: () => void;
  selectedSchedule: Schedule | null;
}

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    transform: "translate(-50%, -50%)",
  }
}

export const ScheduleDetailModal = ({closeModal, selectedSchedule}: Props) => {
  return (
    <Modal isOpen={!!selectedSchedule} onRequestClose={closeModal} style={modalStyle}>
      {selectedSchedule && (
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-center text-3xl font-bold pb-5">{selectedSchedule.title}</h3>
          <p className="text-lg">{format(selectedSchedule.date, "yyyy年MM月dd日")}</p>
          <p className="text-lg">{selectedSchedule.description}</p>
        </div>
      )}

    </Modal>
  )
}
