import { FC, ReactNode } from "react";
interface iCard {
  text: string;
  icon: ReactNode;
}

const CardProps: FC<iCard> = ({ text, icon }) => {
  return (
    <div>
      <div className="min-h-[250px] py-5 w-full bg-white flex justify-center items-center  shadow-md rounded-md border hover:text-white hover:bg-blue-800 hover:border-white group">
        <div className="w-[80%] flex justify-center items-center flex-col">
          <div className="border-[1px] mb-2 shadow-sm border-blue-800 py-4 px-5 flex justify-center items-center rounded-full group-hover:border-white ">
            {icon}
          </div>
          <h2 className="font-semibold text-blue-950 group-hover:text-white">
            Progressive Programs
          </h2>
          <p className="text-center text-blue-950 group-hover:text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
