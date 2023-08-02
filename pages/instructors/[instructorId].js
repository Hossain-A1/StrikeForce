import SectionHeadline from "@/components/SectionHeadline";
import { instructorsData } from "@/utils/instructorsData";
import Image from "next/image";
import { useRouter } from "next/router";

const instructorDetails = () => {
  const router = useRouter();
  const query = router.query.instructorId;
  const instructors =
    instructorsData.length > 0 &&
    instructorsData.filter((instructor) => instructor.id == query);
  return (
    <div className="wraper section-padding">
      {instructors.map((instructor) => (
        <div key={instructor.id} className="flex flex-col items-center gap-5">
          <div className="arts-image w-[80vw] h-[80vh]">
            <Image
              src={instructor.src}
              alt={instructor.art}
              priority
              width={500}
              height={400}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 items-center ">
        
         <h2 className="text-lg uppercase font-semibold">
              {instructor.name}
            </h2>
            <span className="text-lg font-medium capitalize text-yellow-700">
              instructor
            </span>

            <h2 className="capitalize text-black font-semibold text-lg">
              favourite: {instructor.art}
            </h2>
         
            <p className="text-gray-500 w-2/5 tracking-wider italic">
              {instructor.description}
            </p>
          </div>
          <div className="all arts">
            <SectionHeadline h2="This instructor has been trained in a variety of martial arts." />

 {
  instructor.arts.flatMap(art=>(
   [art]
  ))
 }


          </div>
        </div>
      ))}
    </div>
  );
};

export default instructorDetails;
