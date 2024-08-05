import React, { useState } from 'react';
import styles from './ourArticles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import popularArticlePNG from '../../../assets/MainPage/ourArticle/image/Popular Article.png';
import iconSVG from '../../../assets/MainPage/ourArticle/icon/a.svg';
import vrEducation from '../../../assets/MainPage/ourArticle/image/14.png';
import vrArchitecture from '../../../assets/MainPage/ourArticle/image/1.png';
import vrEntertainment from '../../../assets/MainPage/ourArticle/image/5.png';
import vrEvent from '../../../assets/MainPage/ourArticle/image/4.png';

function OurArticles() {
    const articles_ = [
        {
            img: vrEducation,
            name: 'VR Education',
            subText: 'The Future of Education: How VR is Revolutionizing the Classroom',
        },
        {
            img: vrArchitecture,
            name: 'VR Architecture',
            subText: 'Bringing Designs to Life: How VR is Changing Architecture',
        },
        {
            img: vrEntertainment,
            name: 'VR Entertainment',
            subText: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
        },
        {
            img: vrEvent,
            name: 'VR Event',
            subText: 'Exploring New Worlds: The Benefits of VR Travel',
        },
    ];

    const [articles, setArticles] = useState(articles_);

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <p>OUR ARTICLES</p>
                    <h2>Stay Up-to-Date with Our VR Insights</h2>
                </div>
                <a href="">SEE ALL</a>
            </div>

            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    {/* left */}
                    <div className={styles.popularArticle}>
                        <p>Popular Article</p>
                        <img src={popularArticlePNG} alt="Popular Article" />
                        <img src={iconSVG} alt="Icon" />

                    </div>

                    <div className={styles.recentArticle}>
                        <p>Recent Article</p>
                        <Swiper
                            direction={'vertical'}
                            pagination={{ clickable: true }}
                            className={styles.boxs}
                            slidesPerView={3}
                            spaceBetween={30}
                        >
                            {articles.map((article, index) => (
                                <SwiperSlide key={index} className={styles.box}>
                                    <div>
                                        <img src={article.img} alt={article.name} />
                                        <div className={styles.recentArticleText}>
                                            <h5>{article.name}</h5>
                                            <p>{article.subText}</p>
                                        </div>
                                    </div>
                                    {/* icon */}
                                    <img src={iconSVG} alt="Icon" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurArticles;
