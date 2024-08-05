import React from 'react'

import Navbar from '../../components/navbar/navbar';
import AboutUS from './aboutUS/aboutus';
import Banner from './banner/banner';
import ChooseUS from './chooseUS/chooseUS';
import Howstart from './howStart/howstart';
import Ourservice from './ourService/ourservice';
import WhyUs from './WhyUs/whyUs';
import ClientSaying from './clientSaying/clientSaying';
import OurPricing from './ourPricing/ourPricing';
import OurTrusted from './ourTrusted/ourTrusted';
import OurArticles from './ourArticles/ourArticles';
import Subscribe from './subscribe/subscribe';
import Footer from '../../components/footer/footer';

function MainPage() {
    return (
        <>
            <Navbar />
            <Banner />
            <WhyUs />
            <AboutUS />
            <Ourservice />
            <ChooseUS />
            <Howstart />
            <ClientSaying />
            <OurPricing />
            <OurTrusted />
            <OurArticles />
            <Subscribe />
            <Footer />
        </>
    )
}

export default MainPage