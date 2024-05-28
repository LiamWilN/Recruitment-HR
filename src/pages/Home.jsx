import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Login from './Login'

const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Admin Center');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

  return (


    <>
        <Header ItemClicked={handleItemClick} />
        <Hero content={selectedItem} />
    </>
  )
}

export default Home