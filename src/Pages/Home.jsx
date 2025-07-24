import { FlightBrands } from "../Components/Home/FlightBrands";
import { ResortBooking } from "../Components/Home/ResortBooking";
import { Banner } from "../Components/Home/Banner";
import { SuccessRate } from "../Components/Home/SuccessRate";
import { TourCategories } from "../Components/Home/TourCategories";
import { PopularDestination } from "../Components/Home/PopularDestination";
import { TopDestination } from "../Components/Home/TopDestination";
import { Testomonial } from "../Components/Home/Testomonial";

export const Home = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[80vh]">
        <Banner bannerImage={"/assets/homeBanner.png"} />
      </div>
      <ResortBooking />
      <FlightBrands />
      <SuccessRate />
      <TourCategories />
      <PopularDestination />
      <TopDestination />
      <Testomonial />
    </div>
  );
};
