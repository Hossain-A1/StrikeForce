import Image from "next/image";
import Button from "./Button";

const ArtsComp = ({ art }) => {
  return (
    <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center  ">
      <h2 className="text-lg uppercase font-semibold">{art?.title}</h2>
      <div className="arts-image w-[15rem] h-[15rem] p-0">
      <Image width={460} height={400} priority src={art?.src} alt={art?.title} className="w-full h-full object-cover rounded shadow-lg"/>
      </div>
      <Button href={`/arts/${art?.id}`} color="ghost" placeholder={art?.cta} />
    </div>
  );
};

export default ArtsComp;
