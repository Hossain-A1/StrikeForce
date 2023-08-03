import Image from "next/image";

const GalleryPhoto = ({ gallery }) => {
  return (
    <div className='h-[15rem] w-[20rem]'>
      <Image
        width={460}
        height={400}
        priority
        src={gallery.src}
        alt='gallery photo'
        className='w-full h-full object-cover rounded shadow-lg'
      />
    </div>
  );
};

export default GalleryPhoto;
