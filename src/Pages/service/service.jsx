import React from 'react'

import Navbar from '../../components/navbar/navbar'
import Navgitaion from './navigation/navgitaion'
import OurService from '../mainPage/ourService/ourservice'
import Statistics from './statistics/statistics'
import OurPricing from '../../Pages/mainPage/ourPricing/ourPricing'
import ClientSaying from '../../Pages/mainPage/clientSaying/clientSaying'
import Subscribe from '../../Pages/mainPage/subscribe/subscribe'
import Footer from '../../components/footer/footer'


function Service() {
  return (
    <>
      <Navbar />
      <Navgitaion />
      <OurService />
      <Statistics />
      <OurPricing />
      <ClientSaying />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Service