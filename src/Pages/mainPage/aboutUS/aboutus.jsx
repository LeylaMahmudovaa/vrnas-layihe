import React from 'react'

import style from './aboutUS.module.css'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'
import aboutPNG from '../../../assets/AboutPage/About Us/ABOUT US.png'
import rectangelPNG from '../../../assets/AboutPage/About Us/Bg.png'
import videoPNG from '../../../assets/AboutPage/About Us/Image.png'

function AboutUS() {
    return (
        <section className={style.container}>

            {/* image [Left] */}
            <div className={style.image}>
                <img  className={style.mainIMG} src={aboutPNG} alt="" />
                <img  className={style.rectangelPNG} src={rectangelPNG} alt="" />
                <img  className={style.videoPNG} src={videoPNG} alt="" />
            </div>


            {/* About Text [Right] */}
            <div className={style.text}>
                <h5>ABOUT US</h5>

                <h3>Bring your events to life like never before with our VR services.</h3>

                <p>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>

                <ul>
                    <li> Cutting-Edge Technology</li>
                    <li>  Versatile Applications</li>
                    <li> Affordable and Accessible</li>
                </ul>

                <GradientBTN text={'READ MORE'} />

            </div>


        </section>
    )
}

export default AboutUS