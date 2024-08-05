import React, { useState } from 'react';
import styles from './clientSaying.module.css';

import vectorPNG from '../../../assets/MainPage/clientSaying/TESTIMONIAL.png';

import avatar1PNG from '../../../assets/MainPage/clientSaying/Avatar 1.png';
import avatar2PNG from '../../../assets/MainPage/clientSaying/Avatar 2.png';
import avatar3PNG from '../../../assets/MainPage/clientSaying/Avatar 3.png'
import avatar4PNG from '../../../assets/MainPage/clientSaying/Avatar 4.png';
import avatar5PNG from '../../../assets/MainPage/clientSaying/Avatar 5.png';
import avatar6PNG from '../../../assets/MainPage/clientSaying/Avatar 6.png';

function ClientSaying() {
    const avatars_ = [avatar1PNG, avatar2PNG, avatar3PNG, avatar4PNG, avatar5PNG, avatar6PNG];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section className={styles.container}>

            <div className={styles.avatars}>
                {avatars_.map((avatar, index) => (
                    <div
                        key={index}
                        className={styles.avatar}

                    >
                        <img onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave} src={avatar} alt={`Avatar ${index + 1}`} />
                        <div className={`${styles.avatarAbout} ${hoveredIndex === index ? styles.active : ''}`}>
                            <p>The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h2>Robert Fox - <span>CEO Anono</span></h2>
                            <hr />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.text}>
                <p>TESTIMONIAL</p>
                <h2>What Our Clients Are Saying</h2>
            </div>

            <div className={styles.BG}>
                <img src={vectorPNG} alt="Background Vector" />
            </div>
        </section>
    );
}

export default ClientSaying;
