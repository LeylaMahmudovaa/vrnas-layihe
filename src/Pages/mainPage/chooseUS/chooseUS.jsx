import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './chooseUS.module.css';
import imagePNG from '../../../assets/MainPage/chooseUS/Image.png'


function ChooseUS() {
    const reasons_ = [
        {
            id: uuidv4(),
            reason: 'Passionate and Experienced Team',
            explanation: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'
        },
        {
            id: uuidv4(),
            reason: 'Customized Solutions',
            explanation: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'
        },
        {
            id: uuidv4(),
            reason: 'Exceptional Customer Service',
            explanation: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'
        },
    ];

    const [reasons, setReasons] = useState(reasons_);
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(prevId => prevId === id ? null : id); // Toggle the clicked ID
    }

    return (
        <section className={styles.container}>
            {/* Left */}
            <div className={styles.text}>
                <p>WHY CHOOSE US</p>
                <h2>Why Choose Us for Your VR Needs</h2>

                {reasons.map((reason) => {
                    return (
                        <div key={reason.id} className={styles.box}>
                            <h4
                                className={styles.title}
                                onClick={() => handleClick(reason.id)}
                            >
                                {reason.reason}

                                <i  style={{fontSize:'15px' , position:'relative', transformOrigin: 'center' ,transition: 'transform 0.5s ease-in-out', transform: `${activeId === reason.id ?'rotateZ(180deg)' : 'rotateZ(0deg)'}`}} class="fa-solid fa-angle-up"></i>
                            </h4>
                            <p
                                className={`${styles.subTitle} ${activeId === reason.id ? styles.active : ''}`}
                            >
                                {reason.explanation}
                            </p>
                        </div>
                    );
                })}
            </div>

           
                <img src={imagePNG} alt="Image" />
           
        </section>
    );
}

export default ChooseUS;
