import Button from "./Button";


const Slide = ({ img }) => {
  return (
    <div className="relative slide h-full w-full bg-no-repeat bg-center bg-cover  " style={{ backgroundImage: `url(${img.src}) `,width:"100%"} } >
     
      
     <div className="details  flex flex-col justify-center  items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] ">
     <h2 className=" text-white  text-2xl uppercase  text-center tracking-wider   ">
        {img.headline}{" "}
      </h2>
      <p className="text-gray-200 text-sm text-center w-3/5 ">{img.description}</p>
      <Button href='/contact-us' color="dark" placeholder='Get started'/>
     </div>
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-rose-700/40 z-[20]"></div>
     
    </div>
    
  );
};

export default Slide;
