import React, { Fragment } from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import FindCar from "../../components/findcar";
import About from "../../components/About";
import Service from "../../components/Service";
import Promo from "../../components/Promo";
import HotOffers from "../../components/HotOffers";
import Testimonial from "../../components/Testimonial";
import Team from "../../components/Team";
import Help from "../../components/Help";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FindCar />
      <About />
      <Service />
      <Promo />
      <HotOffers />
      <Testimonial />
      <Team />
      <Help />
      <Blog />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
