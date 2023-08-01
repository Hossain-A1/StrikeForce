import GalleryPhoto from "@/components/GalleryPhoto";
import SectionHeadline from "@/components/SectionHeadline";
import { data } from "@/utils/data";

const Gallery = () => {
  return (
    <div className="wrapper section-padding">
      <div className=" flex flex-col items-center gap-3">
      <SectionHeadline h2="Relive Your Favorite Memories with Our Gallery of Images!" />
      <p className="w-3/6 italic tracking-wider text-gray-500">Our instructors' students come from diverse backgrounds and bring a wealth of knowledge and experience to the classroom. Our management team provides oversight, guidance, and support to ensure that our students have the best possible learning experience. </p>
      </div>

      <div className="gallery-data flex flex-wrap justify-between items-center gap-5 py-10">
        {data.map((galleryImg) => (
          <GalleryPhoto key={galleryImg.id} galleryImg={galleryImg} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
