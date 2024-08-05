import React from 'react'
import style from './banner.module.css'

import clientSVG from '../../../assets/MainPage/banner/Happy Client.svg'
import videoPNG from '../../../assets/MainPage/banner/Video.png'
import bannerIMG from '../../../assets/MainPage/banner/Image.png'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'

function Banner() {
    return (
        <section className={style.container}>
            {/* Text [Left] */}
            <div className={style.text}>
                <h2>Immerse Yourself in Virtual Reality</h2>
                <p>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>

                <GradientBTN text={'DISCOVER MORE'}/>

                <div className={style.client}>
                    <img src={clientSVG} />
                    <img src={videoPNG} />
                </div>
            </div>

            {/* Image [Right] */}
            <img src={bannerIMG} />
        </section>
    )
}

export default Banner