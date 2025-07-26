import { Availability } from "../Components/Flights/Availability";
import { FlightBanner } from "../Components/Flights/FlightBanner";
import { FlightResultPage } from "../Components/Flights/FlightResultPage";

export const Flights = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[30vh]">
        <FlightBanner />
      </div>
      <Availability />
      <FlightResultPage />
    </div>
  );
};
