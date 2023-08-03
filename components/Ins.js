
import Image from "next/image";
import Button from "./Button";

const Ins = ({instructor}) => {
  return (
    <div className="">
       <div className="inst flex flex-col justify-center items-center gap-5">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src={instructor.src}
                alt="instructor image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              
              <h2 className="capitalize font-semibold">{instructor.name}</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">{instructor.description.substring(0,45)}...</p>
            <Button href={`/instructors/${instructor?.id}`} color='dark' placeholder={instructor.btn}/>
            </div>
        </div>
    </div>
  )
}

export default Ins