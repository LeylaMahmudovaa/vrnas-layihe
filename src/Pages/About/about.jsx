import React from 'react'

import Navigation from './navigation/navgitaion'
import AboutUS from './aboutUs/aboutUs'
import Navbar from '../../components/navbar/navbar'
import WhoChoose from './whoChoose/whoChoose'
import OurTeam from './ourTeam/ourTeam'
import ChooseUS from '../mainPage/chooseUS/chooseUS'
import OurTrusted from '../mainPage/ourTrusted/ourTrusted'
import Faq from './FAQ/faq'
import Subscribe from '../mainPage/subscribe/subscribe';
import Footer from '../../components/footer/footer';



function About() {
  return (
    <>
      <Navbar />
      <Navigation />
      <AboutUS />
      <WhoChoose/>
      <ChooseUS  />
      <OurTeam />
      <OurTrusted/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default About