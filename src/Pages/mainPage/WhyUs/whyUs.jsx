import React, { useState } from 'react'
import style from './whyUs.module.css'

import CustomizationSVG from '../../../assets/MainPage/WhyUs/icon/Customization.svg'
import ExpertiseSVG from '../../../assets/MainPage/WhyUs/icon/Expertise.svg'


function WhyUs() {

  const offers_ = [
    {
      img: ExpertiseSVG,
      text: 'Expertise',
      subText: 'Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service'
    }, {
      img: CustomizationSVG,
      text: 'Customization',
      subText: "Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals"
    }, {
      img: ExpertiseSVG,
      text: 'Service',
      subText: "We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience."
    }
  ]


  const [offers, setOffers] = useState(offers_)




  return (


    <section className={style.container}>

      {offers.map(offer => {
        return <div className={style.box}>
          <img src={offer.img} alt="Icon" />
          <h4>{offer.text}</h4>
          <p>{offer.subText}</p>
        </div>
      })}

    </section>
  )
}

export default WhyUs