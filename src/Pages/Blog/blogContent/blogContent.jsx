import React, { useState } from 'react'

import Style from './blogContent.module.css'

import image from '../../../assets/blog/Image.png'
import image2 from '../../../assets/blog/Image2.png'
import image3 from '../../../assets/blog/Image3.png'
import image4 from '../../../assets/blog/Image4.png'
import image5 from '../../../assets/blog/Image5.png'
import image6 from '../../../assets/blog/Image6.png'
import image7 from '../../../assets/blog/Image7.png'
import image8 from '../../../assets/blog/Image8.png'
import image9 from '../../../assets/blog/Image9.png'


function BlogContent() {

    const blogs_ = [
        {
            img: image,
            name: 'VR Games',
            header: 'Entertainment Goes Virtual: The Rise of VR Gaming'
        }, {
            img: image2,
            name: 'VR Games',
            header: 'Entertainment Goes Virtual: The Rise of VR Gaming'
        }, {
            img: image3,
            name: 'Entertainment',
            header: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions'
        }, {
            img: image4,
            name: 'VR Event',
            header: 'Exploring New Worlds: The Benefits of VR Travel'
        }, {
            img: image5,
            name: 'VR Architecture',
            header: 'Bringing Designs to Life: How VR is Changing Architecture'
        }, {
            img: image6,
            name: 'VR Games',
            header: 'Entertainment Goes Virtual: The Rise of VR Gaming'
        }, {
            img: image7,
            name: 'VR Games',
            header: 'Entertainment Goes Virtual: The Rise of VR Gaming'
        }, {
            img: image8,
            name: 'VR Games',
            header: 'Entertainment Goes Virtual: The Rise of VR Gaming'
        },
        {
            img: image9,
            name: 'VR Education',
            header: 'The Future of Education: How VR is Revolutionizing the Classroom'
        }
    ]


    const [blogs, setBlogs] = useState(blogs_)


    return (
        <section className={Style.container}>

            <div className={Style.boxs}>
                {blogs.map(blog => {
                    return <div className={Style.box}>
                        <img src={blog.img} />
                        <div className={Style.text}>
                            <p>{blog.name}</p>
                            <h3>{blog.header}</h3>
                            <h5>READ MORE</h5>
                        </div>
                    </div>
                })}
            </div>


            <ul>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </ul>

        </section>
    )
}

export default BlogContent