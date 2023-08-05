import Ins from "@/components/Ins";
import SectionHeadline from "@/components/SectionHeadline";
import { instructorsData } from "@/utils/instructorsData";

const Instructors = () => {
  return (
    <div className='wrapper section-padding'>
     <div className="space-y-5">
     <h1 className="uppercase text-2xl font-semibold text-center underline underline-offset-4">instructors</h1>
      <SectionHeadline h2='Discover the Benefits of Learning Martial Arts from Professional Instructors!' />
     </div>
      <div className='inst-wrapper grid lg:grid-cols-3 grid-cols-1 items-center gap-10 py-10'>
        {instructorsData.map((instructor) => (
          <Ins key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
