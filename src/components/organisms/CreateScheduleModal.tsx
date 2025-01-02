import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
}

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
  }
}

export const CreateScheduleModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <h3 className="text-center text-3xl text-lime-800 font-bold bp-5">予定作成</h3>
      </div>
    </Modal>
  )
}
