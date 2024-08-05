import React, { useState } from 'react'

import style from './ourservice.module.css'

import developmentSVG from '../../../assets/MainPage/ourservice/icon/Vector.svg'
import vrDesignSVG from '../../../assets/MainPage/ourservice/icon/g4153.svg'
import vrConsultingSVG from '../../../assets/MainPage/ourservice/icon/g1944.svg'
import vrGames from '../../../assets/MainPage/ourservice/icon/video-console.svg'
import vrEvents from '../../../assets/MainPage/ourservice/icon/g3720.svg'
import vrEntertainment from '../../../assets/MainPage/ourservice/icon/theatre.svg'

function Ourservice() {

    const servies_ = [
        {
            img: developmentSVG,
            name: 'VR Development',
            subText: 'From concept to creation, our team of VR developers will bring your vision to life.'
        }, {
            img: vrDesignSVG,
            name: 'VR Design',
            subText: 'Our talented VR designers will create immersive and engaging environments that will captivate your audience.'
        }, {
            img: vrConsultingSVG,
            name: 'VR Consulting',
            subText: 'Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.'
        }, {
            img: vrGames,
            name: 'VR Games',
            subText: 'We offer a wide selection of VR games that are suitable for players of all ages and skill levels.'
        }, {
            img: vrEvents,
            name: 'VR Events',
            subText: 'Make your next event unforgettable with our VR event services.'
        }, {
            img: vrEntertainment,
            name: 'VR Entertainment',
            subText: 'reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.'
        }

    ]


    const [services, setServices] = useState(servies_)

    return (
        <section className={style.container}>

            <div className={style.text}>

                <div className={style.mainText}>
                    <p>OUR SERVICE</p>
                    <h2>Our Service</h2>
                </div>


                <p>We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>

            </div>



            <div className={style.boxs}>

                {services.map(service => {
                    return <div className={style.box}>
                        <img src={service.img} alt="Icon" />

                        <div>
                            <h3>{service.name}</h3>
                            <p>{service.subText}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Ourservice