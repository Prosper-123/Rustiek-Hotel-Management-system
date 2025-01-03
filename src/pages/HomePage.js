import React from "react";
import Hero from "../components/Hero";
import RoomSearch from "../components/RoomSearch";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import RoomsListings from "../components/RoomListings";
import Amenities from "../components/amenities";
import Dining from "../components/Dining";
import SpecialOffers from "../components/SpecialOffer";
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/Faqs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <RoomSearch />
      <RoomsListings />
      <Amenities />
      <Dining />
      <SpecialOffers />
      <PhotoGallery />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
};
  

export default HomePage;
