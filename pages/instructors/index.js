import Button from "@/components/Button";
import SectionHeadline from "@/components/SectionHeadline";
import Image from "next/image";

const Instructors = () => {
  return (
    <div className="wrapper section-padding">
       <div className="space-y-5">
       <SectionHeadline h2=' Experienced Martial Arts Instructors Ready to Help You Reach Your Goals.'/>
        <h2 className="uppercase font-semibold text-center  text-yellow-700">Our Instructors</h2>
       </div>
      <div className="inst-wrapper grid lg:grid-cols-5 grid-cols-1 items-center gap-10 py-10">

        <div className="col-spn col-span-2 space-y-5">
        <div className="inst flex flex-col justify-center items-center gap-5">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045664/pexels-photo-7045664.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              <h2 className="capitalize font-semibold">Senpai Park</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">Senpai Park's martial arts instructor is a highly experienced and knowledgeable practitioner...</p>
            <Button href='/instructor' color='dark' placeholder='reed more'/>
            </div>
        </div>
      {/* ========= */}
        <div className="inst flex flex-col justify-center items-center gap-5">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045420/pexels-photo-7045420.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              <h2 className="capitalize font-semibold">Topal rook</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">Senpai Park's martial arts instructor is a highly experienced and knowledgeable practitioner...</p>
            <Button href='/instructor' color='dark' placeholder='reed more'/>
            </div>
        </div>
        </div>
      {/* ========= */}
       <div className="col-spn col-span-1 space-y-5">
       <div className="inst flex flex-col justify-center items-center gap-5 ">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src="https://images.pexels.com/photos/8611939/pexels-photo-8611939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              <h2 className="capitalize font-semibold">Kafiza</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">Senpai Park's martial arts instructor is a highly experienced and knowledgeable practitioner...</p>
            <Button href='/instructor' color='dark' placeholder='reed more'/>
            </div>
        </div>
       </div>
      {/* ========= */}
      <div className="col-spn col-span-2 space-y-5">
        <div className="inst flex flex-col justify-center items-center gap-5">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src="https://images.pexels.com/photos/8612486/pexels-photo-8612486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              <h2 className="capitalize font-semibold">Abu musa</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">Senpai Park's martial arts instructor is a highly experienced and knowledgeable practitioner...</p>
            <Button href='/instructor' color='dark' placeholder='reed more'/>
            </div>
        </div>
      {/* ========= */}
        <div className="inst flex flex-col justify-center items-center gap-5">
        <div className="arts-image w-[17rem] h-[20rem] p-0">
              <Image
                src="https://images.pexels.com/photos/8612466/pexels-photo-8612466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="short-desc  flex flex-col justify-center items-center gap-2">
              <h2 className="capitalize font-semibold">Roos</h2>
              <span className="text-lg font-medium capitalize text-yellow-700">instructor</span>
              <p className="text-gray-600 w-3/5 text-center">Senpai Park's martial arts instructor is a highly experienced and knowledgeable practitioner...</p>
            <Button href='/instructor' color='dark' placeholder='reed more'/>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Instructors