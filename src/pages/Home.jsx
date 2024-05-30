import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Admin Center');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

  return (
    <>
        <Header ItemClicked={handleItemClick} />
        <Hero content={selectedItem} />
        <Footer />
    </>
  )
}

export default Home