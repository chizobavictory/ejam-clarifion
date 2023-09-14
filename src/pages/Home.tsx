import React from "react";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import Check from "../components/Check";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <BottomNav />
      <Hero />
      <Check />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
