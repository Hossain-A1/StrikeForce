import Image from "next/image";

const GalleryPhoto = ({galleryImg}) => {
  return (
    <div className="h-[15rem] w-[20rem]">
      <Image width={460} height={400} priority src={galleryImg.src} alt="" className="w-full h-full object-cover rounded shadow-lg"/>
    </div>
  )
}

export default GalleryPhoto