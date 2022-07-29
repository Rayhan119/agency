import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Faq from "../Faq/Faq";
import Service from "../Services/Service/Service";
import Header from "../Shared/Header/Header/Header";
import Team from "../Team/Team";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Service></Service>
      <AboutUs></AboutUs>
      <Team></Team>
      <Faq></Faq>
    </div>
  );
};

export default Home;
