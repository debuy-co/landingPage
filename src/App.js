import Header from "./components/layout/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Price from "./components/price/Price";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Price />
      <Testimonials />
      <ContactUs />
      <Footer />
      <Popup />
      {/* <GridTest /> //this was only to show the grid layout*/}
    </div>
  );
}

export default App;
