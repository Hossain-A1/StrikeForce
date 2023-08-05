import SectionHeadline from "@/components/SectionHeadline";
import Image from "next/image";

const About = () => {
  return (
    <div className='wrapper section-padding'>
   <div className="space-y-5">
   <h1 className="uppercase text-2xl font-semibold text-center underline underline-offset-4">about us</h1>
      <SectionHeadline h2='StrikeForce An Unstoppable Force in the Martial Arts World!' />
   </div>

      <div className='h-full w-full py-10'>
        <Image
          width={460}
          height={400}
          priority
          src='https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='martial house'
          className='w-full h-full object-cover rounded shadow-lg'
        />
      </div>

      <div className='flex flex-col items-center gap-5'>
        <h2 className='text-center text-black font-medium capitalize text-xl underline underline-offset-4'>
          about us
        </h2>
        <p className='text-gray-500 w-5/6'>
          Martial Strike Force is an innovative self-defense system that
          combines elements from various martial arts and combat sports. It
          focuses on developing skills that are useful in a real-world
          self-defense situation, such as situational awareness, avoidance
          tactics, striking techniques, and ground fighting. It emphasizes the
          use of natural body movements and leverage to neutralize an
          opponent.Its Force is a combat simulation game that utilizes realistic
          physics and fast-paced action. The game puts players in control of a
          team of combat specialists, with each player controlling a different
          specialist. The team must work together to complete objectives and
          defeat enemies in a variety of environments. Players can customize
          their teams loadout and strategy to suit their style of play. The game
          also features a variety of multiplayer modes for competitive play.{" "}
        </p>
      </div>

    </div>
  );
};

export default About;
