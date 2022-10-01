import React from "react";
import MainContent from "./MainContent";
import Heading from "../../Common/Heading";
import PlantCategory from "./PlantCategory";
import MeetPlant from "./MeetPlant";
import DealDay from "./DealDay";
import WhyUs from "./WhyUs";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
// import Footer from './components/Common/Footer';

function LandingPage() {
  return (
    <div className="super">
      <div className="main">
        {/* <Navbar/> */}
        <MainContent />
      </div>
      <div className="category">
        <Heading content={"Plant For Any Occasion"} />
        <PlantCategory />
      </div>
      <DealDay />
      <MeetPlant />
      <WhyUs />
      <Testimonial />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
}

export default LandingPage;
