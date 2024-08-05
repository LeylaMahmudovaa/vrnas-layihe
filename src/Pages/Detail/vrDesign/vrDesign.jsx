import React from 'react'

import Style from './vrDesign.module.css'

import BG from '../../../assets/DetailService/vrDesign/SERVICE.png'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'

function VrDesign() {
  return (

    <section className={Style.container}>

      <div className={Style.BG}>
        <img src={BG} />
      </div>


      <div className={Style.service}>
        <h5>SERVICE</h5>
        <h2>VR Design</h2>
        <p>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
        <p>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

        <div className={Style.box}>
          <p>Our VR design services include:</p>
          <p>Concept development and ideation</p>
          <p>Storyboarding and scriptwriting</p>
          <p>3D modeling and animation</p>
          <p>User interface design and development</p>
          <p>Sound design and effects</p>
          <p>Quality assurance testing and optimization</p>
        </div>

        <p>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
        <p>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>

        <GradientBTN text={'CONTACT US'} />
      </div>

    </section>
  )
}

export default VrDesign