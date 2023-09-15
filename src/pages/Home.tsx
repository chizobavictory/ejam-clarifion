import React from "react";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import Check from "../components/Check";
import Main from "../components/Main";
import Footer from "../components/Footer";
import MobileNav from "../components/NavMobile";
import BottomNavMobile from "../components/BottomNavMobile";
import CheckMobile from "../components/CheckMobile";
import MainMobile from "../components/MainMobile";

const Home = () => {
  return (
    <div>
      <Nav />
      <MobileNav />
      <BottomNav />
      <BottomNavMobile />
      <Hero />
      <Check />
      <CheckMobile />
      <Main />
      <MainMobile />
      <Footer />
    </div>
  );
};

export default Home;
