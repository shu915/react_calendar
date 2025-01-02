type Props = {
  children: React.ReactNode;
}

export const Schedule = ({children}: Props) => {
  return (
    <button className="block bg-lime-800 text-white rounded-sm w-[94%] px-2">
      {children}
    </button>
  )
}
