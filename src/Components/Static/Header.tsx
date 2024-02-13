import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import logo from "../../assets/zero_no_clean-removebg-preview.png";

const Header = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div>
      <div className="h-[70px] w-full flex justify-center items-center shadow-md fixed top-0 z-10 bg-blue-800">
        <div className="h-[90%] w-[85%] flex justify-between items-center">
          <div className="w-full flex  justify-between items-center gap-[150px]">
            <div className="">
              <img
                src={logo}
                alt=""
                className="w-[150px] h-[65px] object-contain"
              />
            </div>
            <div className="hidden items-center text-[18px] gap-[20px] text-white md:flex">
              <nav>Pages</nav>
              <nav>Promotions</nav>
              <nav onClick={toggleFunction2} className="flex gap-1">
                Events
                <FaAngleDown className="mt-2" />
                {/* {toggleFunction2 ? <FaAngleDown /> : <FaAngleUp />} */}
              </nav>
              <nav>About</nav>
              <nav>Contact</nav>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div
              className="text-[18px] font-bold cursor-pointer relative md:hidden"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              {drop ? (
                <FaTimes
                  className="text-[40px] text-white"
                  onclick={() => {
                    setDrop(true);
                  }}
                />
              ) : (
                <AiOutlineMenu
                  onclick={() => {
                    setDrop(false);
                  }}
                  className="text-[40px] text-white"
                />
              )}
            </div>
            {drop ? (
              <div className="md:hidden w-full h-[calc(100vh-70px)] bg-white text-black absolute top-[70px] right-[0] flex justify-center items-center">
                <div className="w-[90%] h-[80%] bg-white"></div>
              </div>
            ) : null}

            {toggle2 ? (
              <div className="w-[280px] h-[200px] hidden bg-white boxx rounded-lg justify-center items-center absolute top-[60px] right-[170px] md:flex">
                <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                  <div className="h-[100%] w-[90%] flex justify-center items-center flex-col">
                    {" "}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
