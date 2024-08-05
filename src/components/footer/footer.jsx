import React, { useState } from 'react'

import styles from './footer.module.css'

import logoPNG from '../../assets/navbar/logo/Frame 22.svg'

import TwitterSVG from '../../assets/footer/icons/1.svg'
import FacebookSVG from '../../assets/footer/icons/2.svg'
import InstagramSVG from '../../assets/footer/icons/3.svg'
import GithubSVG from '../../assets/footer/icons/4.svg'


import locationSVG from '../../assets/footer/icons/Location.svg'
import messageSVG from '../../assets/footer/icons/Message.png'
import phoneSVG from '../../assets/footer/icons/Calling.svg'

function Footer() {

  const sm_ = [
    {
      sm_icon: TwitterSVG,
      link: 'www.twitter.com'
    },
    {
      sm_icon: FacebookSVG,
      link: 'www.Facebook.com'
    },
    {
      sm_icon: InstagramSVG,
      link: 'www.Instagram.com'
    },
    {
      sm_icon: GithubSVG,
      link: 'www.github.com'
    },

  ]

  const [sosicalmedia, set_sosicalmedia] = useState(sm_)


  const navItems = {

    Quicklinks: ['Quicklinks', 'Home', 'Pricing Plan', 'Service', 'Blog', 'Our Team'],
    Support: ['Support', 'About us', 'Contact us', 'FAQ', 'Tems & Conditions', 'Privacy Policy'],
    NeedHelp: [

      {
        icon: '',
        title: 'Need Help?'
      },
      {

        icon: locationSVG,
        title: 'Tanjung Sari Street no.48, Pontianak City'
      },
      {
        icon: messageSVG,
        title: 'Support@VRNas.com'
      },
      {
        icon: phoneSVG,
        title: '+123 456 7890'
      }
    ]

  }

  const [items, set_items] = useState(navItems)

  const { Quicklinks, Support, NeedHelp } = navItems


  return (
    <section className={styles.container}>

      <div>
        {/* left */}
        <div className={styles.sosicalMedia}>

          <div className={styles.brandName}>
            <img src={logoPNG} alt="Logo" />
          </div>



          <ul className={styles.SM_icons}>


            {sosicalmedia.map((sm, index) => {
              return <a key={index} href={sm.link}><img src={sm.sm_icon} /></a>
            })}
          </ul>

        </div>



        {/* right */}

        <div className={styles.navigation}>


          {/* QuickLİnks */}
          <ul>
            {Quicklinks.map((item, index) => {
              return <li>{item}</li>
            })}
          </ul>

          {/* Support */}
          <ul>
            {Support.map((item, index) => {
              return <li>{item}</li>
            })}
          </ul>

          {/* Need help ? */}
          <ul>
            {NeedHelp.map((item, index) => {
              return <li key={index}> <img src={item.icon} />  {item.title}</li>
            })}
          </ul>

        </div>
      </div>

      <hr />
      <p>© Copyright 2023, All Rights Reserved</p>
    </section>
  )
}

export default Footer