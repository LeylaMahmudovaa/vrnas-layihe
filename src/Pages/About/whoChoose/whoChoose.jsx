import React from 'react'

import Style from './whoChoose.module.css'
import WhyUs from '../../mainPage/WhyUs/whyUs'


function WhoChoose() {
    return (
        <section className={Style.container}>
            <p>WHY CHOOSE US</p>
            <h2>Empowering Your Virtual Reality Experience</h2>

            <WhyUs/>
        </section>
    )
}

export default WhoChoose