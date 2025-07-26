import Gallery from "../Components/About/Gallery";
import HeroSection from "../Components/About/HeroSection";
import MidBanner from "../Components/About/MidBanner";
import Promotion from "../Components/About/Promotion";
import Testimonial from "../Components/About/Testimonial";
import Trends from "../Components/About/Trends";

const About = () => {
  return (
    <div>
      <HeroSection />
      <Promotion />
      <MidBanner />
      <Trends />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default About;
