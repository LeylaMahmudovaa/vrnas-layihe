import React from 'react'

import Navbar from '../../components/navbar/navbar'
import Navigation from '../../Pages/pricingPlan/navigation/navgitaion'
import Pricing from '../../Pages/pricingPlan/pricing/pricing'
import ChooseUS from '../../Pages/mainPage/chooseUS/chooseUS'
import Subscribe from '../../Pages/mainPage/subscribe/subscribe'
import FAQ from '../../Pages/About/FAQ/faq'
import Footer from '../../components/footer/footer'


function PricingPlan() {
    return (
        <>
            <Navbar />
            <Navigation/>
            <Pricing/>
            <ChooseUS />
            <FAQ />
            <Subscribe/>
            <Footer />
        </>
    )
}

export default PricingPlan