import {IoIosArrowForward ,IoIosArrowBack} from "react-icons/io"
import Slide from "./Slide";
import { useState } from "react";
const slideData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/6455245/pexels-photo-6455245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "Defend Yourself Against Any Attack with Krav Maga",
    description:
      "Krav Maga is a self-defense system developed in Israel. It emphasizes instinctive movements, practical techniques, and realistic training scenarios. It is designed to teach people how to defend themselves in a variety of life-threatening situations. ",
    
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/9510449/pexels-photo-9510449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "The Art of Combat and Self-Defense: Discover the World of Judo.",
    description:
      "Judo is a martial art that originated in Japan and focuses on grappling and throwing techniques. It also involves stances, strikes, and joint locks, and practitioners learn to use their opponent's momentum against them in order to gain an advantage.",
    
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7045589/pexels-photo-7045589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "Martial Arts Master Kicks Up a Storm with Kung Fu.",
    description:
    "Kungfu is a Chinese martial art that has been practiced for centuries. It emphasizes the use of body movements, such as kicks, punches, and throws, to defend oneself and attack an opponent. It is often characterized by its fluid and graceful movements.",
    
  },
  
 
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideData.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideData.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className=" frame relative h-[calc(100vh-5rem)] overflow-x-hidden ">
      <div
        className=" slider h-full  w-[300vw] flex  gap-5 justify-center items-center duration-500"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {slideData.map((img) => [<Slide img={img} key={img.id} />])}

      </div>
      <div className="btns absolute z=[1] text-gray-500 w-screen flex  justify-between px-16 items-center bottom-1/2 ">
        <button
          onClick={prevSlide}
          className="next-btn h-8 w-8 text-gray-500 bg-white shadow-2xl   backdrop-blur-xl text-xl flex justify-center items-center rounded-full  hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900 duration-200"
        >
          <span>
            <IoIosArrowBack />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-8 w-8 text-gray-500 bg-white shadow-2xl  backdrop-blur-xl text-xl flex justify-center items-center rounded-full  hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900 duration-200"
        >
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
