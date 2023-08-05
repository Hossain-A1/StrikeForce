import Slider from "@/components/Slider";
import Hero from "@/components/HeroSec";
import Arts from "./arts";
import Instructors from "./instructors";
import Gallery from "./gallery";
import About from "./aboutus";
import Contact from "./contactus";

const HomePage = () => {
  return (
    <div >
     <Slider/>
   <Hero/>
   <Arts/>
   <Instructors/>
   <Gallery/>
   <About/>
   <Contact/>
    </div>
  )
}

export default HomePage