import Button from "@/components/Button";
import SectionHeadline from "@/components/SectionHeadline";
import Image from "next/image";
import Link from "next/link";

const Arts = () => {
  return (
    <div className="wrapper section-padding ">
      <div className="top">
        <SectionHeadline h2="Discover an Endless Path of Physical and Mental Growth" />

        <div className="arts-wrapper grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-10">
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center  ">
            <h2 className="text-lg uppercase font-semibold">Boxing</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/14898641/pexels-photo-14898641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Judo</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/6765037/pexels-photo-6765037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Kung-fu</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/8612000/pexels-photo-8612000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">karate</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045417/pexels-photo-7045417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Kendo</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/8041993/pexels-photo-8041993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Krav Maga</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045521/pexels-photo-7045521.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Hapkido</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045460/pexels-photo-7045460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
          <div className="arts shadow-lg rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-lg uppercase font-semibold">Capoeira</h2>
            <div className="arts-image w-[15rem] h-[15rem] p-0">
              <Image
                src="https://images.pexels.com/photos/7045658/pexels-photo-7045658.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="boxing-image"
                priority
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <Button href="/art" color="ghost" placeholder="Read more" />
          </div>
          {/* ============ */}
        </div>
      </div>
    </div>
  );
};

export default Arts;
