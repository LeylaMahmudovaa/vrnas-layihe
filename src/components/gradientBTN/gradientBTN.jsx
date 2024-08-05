import React from 'react'
import style from './gradientBTN.module.css'

function GradientBTN({text}) {
    return (
        <div className={style.buttonGradient}>
            <a href=''>{text}</a>
        </div>
    )
}

export default GradientBTN