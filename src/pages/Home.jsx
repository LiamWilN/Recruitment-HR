import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Login from './Login'

const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Admin Center');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

  return (


    <div className='h-dvh w-svw'>
        <Header ItemClicked={handleItemClick} />
        <Hero content={selectedItem} />
        <Footer />
    </div>
  )
}

export default Home