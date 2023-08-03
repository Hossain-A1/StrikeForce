

const SectionHeadline = ({h2,p}) => {
  return (
    <div className=" flex flex-col items-center gap-5" >

   <h2 className="text-center text-black font-medium capitalize text-2xl ">   {h2}</h2>
   <p className="text-gray-500 w-3/5">{p}</p>
  </div>
  
  )
}

export default SectionHeadline