import React, { useState } from 'react'

import Style from './pricing.module.css'


import GradientBTN from '../../../components/gradientBTN/gradientBTN'

function Pricing() {

    const plans_ = [
        {
            name: 'Basic Plan',
            price: '$99',
            about: 'All the basic features to boost your freelance career',
            features: [
                'Access to a selection of VR games and experiences',
                'Limited access to educational content',
                'Limited access to architecture and design tools',
                'No access to exclusive events or promotions'
            ],
            buttonText: 'Get 14 Days Free Trial'
        },
        {
            name: 'Standard Plan',
            price: '$149',
            about: 'All the basic features to boost your freelance career',
            features: [
                'Access to a wider selection of VR games and experiences',
                'Limited access to educational content',
                'Limited access to architecture and design tools',
                'Access to exclusive events and promotions'
            ],
            buttonText: 'Get 14 Days Free Trial'
        },
        {
            name: 'Basic Plan',
            price: '$99',
            about: 'All the basic features to boost your freelance career',
            features: [
                'Access to a wider selection of VR games and experiences',
                'Limited access to educational content',
                'Limited access to architecture and design tools',
                'Priority access to exclusive events and promotions'
            ],
            buttonText: 'Get 14 Days Free Trial'
        }
    ]


    const [plans, setPlans] = useState(plans_)

    return (
        <section className={Style.container}>
            <h5>PRICING</h5>
            <h3>Pricing Plans</h3>
            <p>Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can test out our service and see which plan works best for you.</p>

            <div className={Style.boxs}>
                {plans.map(plan => {
                    return <div className={Style.box}>

                        <p>{plan.name}</p>

                        <h3>{plan.price} <span>/ month</span> </h3>

                        <h5>{plan.about}</h5>

                        <ul>
                            {plan.features.map(feature => {
                                return <li>{feature}</li>
                            })}
                        </ul>


                        <GradientBTN text={plan.buttonText}/>

                    </div>
                })}
            </div>
        </section>
    )
}

export default Pricing