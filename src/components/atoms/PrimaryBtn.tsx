
type PrimaryBtnProps = {
  children: React.ReactNode;
  onClick: () => void;
}

export const PrimaryBtn = ({children, onClick}: PrimaryBtnProps) => {
  return (
    <button className="bg-lime-800 text-white p-4 text-lg rounded-lg" onClick={onClick}>{children}</button>
  )
}
