import Button from "./Button";
import Image from "next/image";

const Classes = ({ cls }) => {
  return (
    <div className="flex flex-col items-center gap-5  ">
      <div className="arts-image w-[17rem] h-[20rem]  relative ">
        <Image
          src={cls.src}
          alt="classes-image"
          priority
          width={500}
          height={400}
          className="h-full w-full object-cover shadow-lg rounded-2xl"
        />
            <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-rose-700/40"></div>
      </div>
      <div className="flex flex-col gap-5 items-center ">
        <h2 className="uppercase font-medium text-rose-700">{cls.title}</h2>
        <p className="text-gray-500"> {cls.description}</p>
        <Button href="/arts" color="rose" placeholder={cls?.cta} />
      </div>
  
    </div>
  );
};

export default Classes;
