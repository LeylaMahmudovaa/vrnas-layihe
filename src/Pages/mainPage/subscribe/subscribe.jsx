import React from 'react'

import styles from './subscribe.module.css'

import letterSVG from '../../../assets/MainPage/subscribe/Message.svg'

function Subscribe() {
    return (
        <section className={styles.container}>
            <h4>Subscribe to our newsletter for latest updates</h4>

            <form className={styles.inputContainer}>
                <input type='email' placeholder={'Enter your email address'} />
                <button><i class="fa-solid fa-paper-plane"></i></button>

                <img src={letterSVG} />
            </form>
        </section>
    )
}

export default Subscribe