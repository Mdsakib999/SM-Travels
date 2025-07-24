import { Banner } from "../Components/Home/Banner";
import PopularHotel from "../Components/Hotel/PopularHotel";

const Hotel = () => {
  return (
    <div>
      <Banner bannerImage={"./assets/hotel/hotelBanner.png"} />
      <PopularHotel />
    </div>
  );
};

export default Hotel;
