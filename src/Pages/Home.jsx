import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedDestinations from "./Components/FeaturedDestinations";
import PopularDestinations from "./Components/PopularDestinations";
import ChooseUs from "./Components/ChooseUs";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div style={{minHeight:"500vh"}}>
      <Navbar />
      <Hero />
      <FeaturedDestinations/>
      <PopularDestinations/>
      <ChooseUs/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default Home;
