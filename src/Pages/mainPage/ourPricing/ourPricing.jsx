import React, { useState } from 'react'

import styles from './ourPricing.module.css'
import iconSVG from '../../../assets/MainPage/ourPricing/icon/Icon.svg'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'

import imagePNG from '../../../assets/MainPage/ourPricing/mask.png'


function OurPricing() {


    const services_ = [
        {
            name: 'Customizable Packages',
            subText: 'We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.'
        }, {
            name: 'Flexible Payment Options',
            subText: 'We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.'
        }, {
            name: 'Satisfaction Guarantee',
            subText: 'We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.'
        },
    ]

    const [services, setServices] = useState(services_)



    return (
        <section className={styles.container}>

            <div className={styles.text}>
                <p>OUR PRICING</p>
                <h2>Affordable VR Services for Everyone</h2>
                <p>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>

                <div className={styles.boxs}>

                    {services.map((service, index) => {
                        return <div key={index} className={styles.box}>
                            <h4><img src={iconSVG} />{service.name} </h4>
                            <p>{service.subText}</p>
                        </div>
                    })}

                </div>


            </div>

            <div className={styles.price}>
                <p>Start from</p>
                <h2>$99</h2>
                <GradientBTN text={'GET STARTED'} />
                <p>30 Days Moneyback Guarantee</p>
            </div>

        </section>
    )
}

export default OurPricing