import React, { useState } from 'react'

import Style from './statistics.module.css'

function Statistics() {

    const statistics_ = [
        {
            name: 'HAPPY CLIENTS',
            number: '123k+'
        }, {
            name: 'PROJECT COMPLETE',
            number: '300k+'
        }, {
            name: 'YEARS EXPERIENCE',
            number: '10+'
        }
    ]

    const [statistics, set_statistics] = useState(statistics_)


    return (
        <section className={Style.container}>
            <div className={Style.boxs}>

                {statistics.map(statistic => {

                    return <div className={Style.statistic}>
                        <p>{statistic.name}</p>
                        <h2>{statistic.number}</h2>
                    </div>
                })}


            </div>

        </section>
    )
}

export default Statistics