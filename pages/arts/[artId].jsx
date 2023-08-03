import { artsData } from "@/utils/artsData";
import Image from "next/image";
import { useRouter } from "next/router";

const ArtDetails = () => {
  const router = useRouter();
  const query = router.query.artId;
  const singleArt =
    artsData.length > 0 && artsData.filter((art) => art.id == query);
  return (
    <div className='wraper section-padding'>
      {singleArt.map((art) => (
        <div key={art.id} className='flex flex-col items-center gap-5'>
          <h2 className='text-lg uppercase font-semibold'>{art.title}</h2>
          <div className='arts-image w-[80vw] h-[80vh]'>
            <Image
              src={art.src}
              alt='boxing-image'
              priority
              width={500}
              height={400}
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 w-2/5 tracking-wider italic'>
            {art.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArtDetails;
