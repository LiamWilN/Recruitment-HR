import React, { useState } from "react";
import Header from "../structure/Header";
import Hero from "../structure/Hero";
import Footer from "../structure/Footer";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState("Admin Center");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-svh w-svw">
      <Header ItemClicked={handleItemClick} />
      <Hero content={selectedItem} />
      <Footer />
    </div>
  );
};

export default Home;
