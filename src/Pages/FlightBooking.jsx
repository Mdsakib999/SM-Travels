import { FlightHeader } from "../Components/FlightBooking/FlightHeader";
import { FlightDetails } from "../Components/FlightBooking/FlightDetails";
import { ImportantInformation } from "../Components/FlightBooking/ImportantInformation";
import { TravelersDetailsForm } from "../Components/FlightBooking/TravelersDetailsForm";
import { Cart } from "../Components/FlightBooking/Cart";
import { Cancellation } from "../Components/FlightBooking/Cancellation";
import { useParams } from "react-router-dom";
import { dummyFlights } from "../FakeDb/Flights";
import { CouponForm } from "../Components/FlightBooking/CouponForm";

const FlightBooking = () => {
  const { id } = useParams();
  const flightId = Number(id);
  const flight = dummyFlights.find((flight) => flight.id === flightId);

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="px-2 sm:px-4 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-10">
          {/* Main Content - single column for small devices, sidebar for xl */}
          <section className="w-full xl:w-2/3 flex flex-col space-y-4 sm:space-y-6 order-2 xl:order-1">
            {/* Flight Header */}
            <FlightHeader flight={flight} />

            {/* Flight Details */}
            <FlightDetails flight={flight} />

            {/* Cart - only show on small/medium devices */}
            <div className="block xl:hidden">
              <Cart flight={flight} />
            </div>

            {/* CoupunForm - only show on small/medium devices */}
            <div className="block xl:hidden">
              <CouponForm />
            </div>

            {/* TravelersDetailsForm */}
            <TravelersDetailsForm />

            {/* Cancellation - only show on small/medium devices */}
            <div className="block xl:hidden">
              <Cancellation />
            </div>

            {/* Important Information at the very bottom */}
            <ImportantInformation />
          </section>

          {/* Sidebar - Booking Summary (visible for xl screens only) */}
          <aside className="xl:w-1/3 w-full space-y-4 sm:space-y-6 order-1 xl:order-2 hidden xl:block">
            {/* Price Breakdown */}
            <Cart flight={flight} />

            {/* Offers & Discounts */}
            <CouponForm />
            {/* Cancellation Policy */}
            <Cancellation />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
