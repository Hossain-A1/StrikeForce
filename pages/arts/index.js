import ArtsComp from "@/components/ArtsComp";
import SectionHeadline from "@/components/SectionHeadline";
import { artsData } from "@/utils/artsData";

const Arts = () => {
  return (
    <div className='wrapper section-padding '>
      <div className="space-y-5">
      <h1 className="uppercase text-2xl font-semibold text-center underline underline-offset-4">martial  arts</h1>

<SectionHeadline h2='Discover an Endless Path of Physical and Mental Growth' />
      </div>
      <div className='arts-wrapper grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-10'>
        {artsData.map((art) => (
          <ArtsComp key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
};

export default Arts;
