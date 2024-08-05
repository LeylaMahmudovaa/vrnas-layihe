import React from 'react'

import Navbar from '../../components/navbar/navbar'
import Navgitaion from './navigation/navgitaion'
import OurPricing from '../mainPage/ourPricing/ourPricing'
import Subscribe from '../../Pages/mainPage/subscribe/subscribe'
import Footer from '../../components/footer/footer'
import VrDesign from './vrDesign/vrDesign'
import OurProject from './ourProject/ourProject'

function DetailService() {
    return (
        <>
            <Navbar />
            <Navgitaion />
            <VrDesign/>
            <OurProject/>
            <OurPricing />
            <Subscribe />
            <Footer />
        </>
    )
}

export default DetailService