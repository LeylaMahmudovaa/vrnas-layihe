import React from 'react'

import imagePNG from '../../../assets/MainPage/ourTrusted/Our Trusted Partners.png'

import styles from './ourTrusted.module.css'

function OurTrusted() {
    return (
        <section className={styles.container}>
            <p>Our Trusted Partners</p>
            <h2>Discover the Companies We Work With</h2>
            <img src={imagePNG} />
        </section>
    )
}

export default OurTrusted