import { FC } from "react";

interface iBtn {
  text: string;
  color?: string;
  hoverColor?: string;
  hoverText?: string;
}

const BtnProps: FC<iBtn> = ({ text, color, hoverColor, hoverText }) => {
  return (
    <div>
      <button
        className={`py-2 px-3 ${color || "bg-blue-800"} text-white hover:${
          hoverColor || "bg-blue-200"
        } hover:text-${hoverText || "blue-800"}`}
      >
        {text}
      </button>
    </div>
  );
};

export default BtnProps;
