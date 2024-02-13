import mainpic from "../assets/mainimgs/istockphoto-950614324-612x612.jpg";
import mainpic2 from "../assets/mainimgs/Child4.jpg";
import BtnProps from "../Components/Props/BtnProps";
import { AiFillMessage } from "react-icons/ai";
import CardProps from "../Components/Props/CardProps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  let images = [mainpic, mainpic2];
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className=" w-full overflow-hidden">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className="w-full h-[85vh] object-cover darkk"
            />
          </div>
        ))}
      </Slider>

      <div className="w-[80%] flex justify-center items-center flex-col absolute top-[50%] left-[50%] doublet">
        <h1 className="text-[35px] lg:text-[50px] text-white md:text-[60px] font-bold">
          Education For Everyone
        </h1>
        <h3 className="text-center text-white lg:text-[22px] mb-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          facilis eaque voluptatibus sit expedita maxime, fugiat molestiae
          distinctio quo repellendus ex, quam iusto. Officiis, animi sed.
          Laudantium commodi pariatur sunt.
        </h3>
        <BtnProps text="Read More" />
      </div>

      <div className="w-full bg-white flex justify-center items-center">
        <div className="w-[85%]  flex justify-center items-center flex-col">
          <div className="w-full py-[50px]   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="my-2 w-full flex justify-center items-center">
              <div className="my-2 w-[70%]  flex justify-center items-center">
                <CardProps
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rerum perspiciatis a eligendi ullam nobis porro animi deserunt accusantium impedit, at qui harum, sed labore est voluptatum."
                  icon={<AiFillMessage />}
                />
              </div>
            </div>
            <div className="my-2  w-full flex justify-center items-center">
              <div className="my-2 w-[70%]  flex justify-center items-center">
                <CardProps
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rerum perspiciatis a eligendi ullam nobis porro animi deserunt accusantium impedit, at qui harum, sed labore est voluptatum."
                  icon={<AiFillMessage />}
                />
              </div>
            </div>
            <div className="my-2 w-full flex justify-center items-center">
              <div className="my-2 w-[70%]  flex justify-center items-center">
                <CardProps
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rerum perspiciatis a eligendi ullam nobis porro animi deserunt accusantium impedit, at qui harum, sed labore est voluptatum."
                  icon={<AiFillMessage />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
