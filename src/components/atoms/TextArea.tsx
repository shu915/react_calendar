import { ComponentProps } from "react";

export const TextArea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea
      {...props}
      className="w-full border-4 border-solid border-lime-800 p-2"
    />
  );
};
