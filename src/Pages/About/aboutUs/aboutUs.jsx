import React from 'react'

import Style from './aboutUs.module.css'

import videoPNG from '../../../assets/AboutPage/About Us/ABOUT US.png'
import imagePNG from '../../../assets/AboutPage/About Us/Image.png'
import BG from '../../../assets/AboutPage/About Us/Bg.png'
import light from '../../../assets/AboutPage/About Us/Light.png'

function AboutUs() {
  return (
    <section className={Style.container}>

      <div className={Style.text}>
        <p>ABOUT US</p>
        <h3>Bringing Your Vision to Life: Learn About VRNas</h3>

        <p>
          VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light. <br />
          Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs. <br />
          From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.
        </p>
      </div>


      <div className={Style.imageBox}>
        <img src={imagePNG} />
        <img src={videoPNG} />
        <img src={light} />
        <img src={BG} />
      </div>

    </section>
  )
}

export default AboutUs