import React from 'react'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'

import styles from './howstart.module.css'

import videoIMG from '../../../assets/MainPage/howStart/Video.png'

function Howstart() {
    return (
        <section className={styles.container}>
            <p>HOW TO GET STARTED</p>
            <h2>Bringing Your Virtual Reality Dreams to Life</h2>

            <img src={videoIMG} />

            <GradientBTN  text={'GET STARTED'}/>
        </section> 
    )
}

export default Howstart