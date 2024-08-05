import React, { useState } from 'react'

import Style from './ourTeam.module.css'

import photo from '../../../assets/AboutPage/ourTeam/Image.png'
import photo2 from '../../../assets/AboutPage/ourTeam/Image3.png'
import photo3 from '../../../assets/AboutPage/ourTeam/Image3.png'
import photo4 from '../../../assets/AboutPage/ourTeam/Image4.png'
import BG from '../../../assets/AboutPage/ourTeam//Bg.png'

function OurTeam() {


    const members_ = [
        {
            photo: photo ,
            name: 'Bondan Prabowo',
            job: 'CEO'
        },   {
            photo: photo2 ,
            name: 'Bayu Aji',
            job: 'VR Development'
        }
        ,   {
            photo: photo3 ,
            name: 'Agung Brandon',
            job: 'VR Artist'
        }
        ,   {
            photo: photo4 ,
            name: 'Aril Laso',
            job: 'UI / UX Designer'
        }
    ]

    const [members , set_Members] = useState(members_)


    return (
        <section className={Style.container}>

            <div className={Style.header}>

                <div className={Style.text}>
                    <p>OUR TEAM</p>
                    <h2>Our Professionals Team</h2>
                </div>


                <a href="">SEE ALL</a>
            </div>


            <div className={Style.teams}>

                {members.map(member => {
                    return <div className={Style.box}>
                        <img src={member.photo} />
                        <img className={Style.BG} src={BG}/>
                        <h4>{member.name}</h4>
                        <p>{member.job}</p>
                    </div>
                })}
            </div>

        </section>
    )
}

export default OurTeam