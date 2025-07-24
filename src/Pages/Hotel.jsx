import { Banner } from "../Components/Home/Banner";
import FaqSection from "../Components/Hotel/FaqSection";
import FeaturedTours from "../Components/Hotel/FeaturedTours";
import PopularCities from "../Components/Hotel/PopularCities";
import PopularHotel from "../Components/Hotel/PopularHotel";
import PopularTour from "../Components/Hotel/PopularTour";

const Hotel = () => {
  return (
    <div>
      <Banner bannerImage={"./assets/hotel/hotelBanner.png"} />
      <PopularHotel />
      <PopularTour />
      <PopularCities />
      <FeaturedTours />
      <FaqSection />
    </div>
  );
};

export default Hotel;
