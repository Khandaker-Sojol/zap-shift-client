import React from "react";
import Banner from "../../components/homeComponents/Banner";
import HowItWorks from "../../components/homeComponents/HowItWorks";
import Brands from "../../components/homeComponents/Brands";
import FeaturesSection from "../../components/homeComponents/FeaturesSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Brands></Brands>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default Home;
