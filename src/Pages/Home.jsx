import { FlightBrands } from "../Components/Home/FlightBrands";
import { ResortBooking } from "../Components/Home/ResortBooking";
import { Banner } from "../Components/Home/Banner";
import { SuccessRate } from "../Components/Home/SuccessRate";
import { TourCategories } from "../Components/Home/TourCategories";

export const Home = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[80vh]">
        <Banner />
      </div>
      <FlightBrands />
      <ResortBooking />
      <SuccessRate />
      <TourCategories />
    </div>
  );
};
