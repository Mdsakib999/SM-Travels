import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Shared/Footer";
import { Navbar } from "./Components/Shared/Navbar";
import { ScrollToTop } from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="min-h-[calc(100vh-196px)]">
        <ScrollToTop />
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
