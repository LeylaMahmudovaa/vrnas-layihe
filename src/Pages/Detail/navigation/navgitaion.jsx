import React from 'react'

import Style from './navigation.module.css'

import light from '../../../assets/AboutPage/navigation/light.png'

function Navgitaion() {
  return (
    <section className={Style.container}>
      <h1>Detail Service</h1>
      <img src={light} />
      <p>Home &gt;  Detail Service</p>


      <hr />
    </section>
  )
}

export default Navgitaion