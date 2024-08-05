import React from 'react'

import Style from './ourProject.module.css'

import videoPNG from '../../../assets/DetailService/ourProject/video.png'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'


function OurProject() {
    return (
        <section className={Style.container}>
            <p>OUR VR DESIGN PROJECT</p>
            <h2>Revolutionize Your Experience with Our Cutting-Edge VR Design Project</h2>
            <div className={Style.BG}>
                <img src={videoPNG} />
                
                <div className={Style.text}>
                    <p>VR Design</p>
                    <h4>VR Design Projects</h4>
                </div>
            </div>

            <GradientBTN text={'GET STARTED'}/>
        </section>
    )
}

export default OurProject