import React from 'react'

import Style from './navigation.module.css'

import light from '../../../assets/AboutPage/navigation/light.png'

function Navgitaion() {
  return (
    <section className={Style.container}>
      <h1>Pricing Plan</h1>
      <img src={light} />
      <p>Home &gt;  Pricing Plan</p>


      <hr />
    </section>
  )
}

export default Navgitaion