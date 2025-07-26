import { Flightheader } from "../Components/FlightBooking/Flightheader";
import { FlightDetails } from "../Components/FlightBooking/FlightDetails";
import { ImportantInformation } from "../Components/FlightBooking/ImportantInformation";
import { TravelersDetailsForm } from "../Components/FlightBooking/TravelersDetailsForm";
import { Cart } from "../Components/FlightBooking/Cart";
import { CoupunForm } from "../Components/FlightBooking/CoupunForm";
import { Cancellation } from "../Components/FlightBooking/Cancellation";
import { useParams } from "react-router-dom";
import { dummyFlights } from "../FakeDb/Flights";

const FlightBooking = () => {
  const { id } = useParams();
  const flightId = Number(id);
  const flight = dummyFlights.find((flight) => flight.id === flightId);

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="px-2 sm:px-4 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-10">
          {/* Main Content */}
          <section className="xl:w-2/3 w-full space-y-4 sm:space-y-6">
            {/* Flight Header */}
            <Flightheader flight={flight} />

            {/* Flight Details */}
            <FlightDetails flight={flight} />

            {/* Important Information */}
            <ImportantInformation />

            {/* Traveler Details Form */}
            <TravelersDetailsForm />
          </section>

          {/* Sidebar - Booking Summary */}
          <aside className="xl:w-1/3 w-full space-y-4 sm:space-y-6">
            {/* Price Breakdown */}
            <Cart flight={flight} />

            {/* Offers & Discounts */}
            <CoupunForm />
            {/* Cancellation Policy */}
            <Cancellation />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
