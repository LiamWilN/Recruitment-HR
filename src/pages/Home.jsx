import React, { useState } from "react";
import Header from "../main/Header";
import Hero from "../main/Hero";
import Footer from "../main/Footer";

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
