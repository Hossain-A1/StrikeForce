import SectionHeadline from "./SectionHeadline";
import Classes from "./Classes";
import { classesData } from "@/utils/classesData";

const Hero = () => {
  return (
    <div className='wrapper section-padding '>
      <div>
        <SectionHeadline
          h2='The whole family can attend martial arts classes together. '
          p='Training alone can help you to focus and concentrate on building your skills. Training with family may be more motivating and can help to create a friendly competition. Whichever you choose, make sure to stay motivated and committed to reaching your goals. '
        />
      </div>
      <div className='classes flex justify-between items-center gap-10 section-padding '>
        { classesData.map((cls) => [<Classes cls={cls} key={cls.id} />])}
      </div>
    </div>
  );
};

export default Hero;
