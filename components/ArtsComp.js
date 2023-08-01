import Image from "next/image";
import Button from "./Button";

const ArtsComp = ({ art }) => {
  return (
    <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center  ">
      <h2 className="text-lg uppercase font-semibold">{art.title}</h2>
      <div className="arts-image w-[15rem] h-[15rem] p-0">
        <Image
          src={art.src}
          alt="boxing-image"
          priority
          width={500}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <Button href={`/arts/${art.id}`} color="ghost" placeholder="Read more" />
    </div>
  );
};

export default ArtsComp;
