import { FlightBrands } from "../Components/Home/FlightBrands";
import { ResortBooking } from "../Components/Home/ResortBooking";
import { Banner } from "../Components/Home/Banner";

export const Home = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[80vh]">
        <Banner />
      </div>
      <FlightBrands />
      <ResortBooking />
    </div>
  );
};
