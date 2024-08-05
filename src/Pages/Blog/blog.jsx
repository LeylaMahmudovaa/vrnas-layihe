import React from 'react'

import Navigation from './navigation/navgitaion'
import Navbar from '../../components/navbar/navbar'
import BlogContent from './blogContent/blogContent'
import Subscribe from '../mainPage/subscribe/subscribe'
import Footer from '../../components/footer/footer'



function Blog() {
    return (
        <>
            <Navbar />
            <Navigation />
            <BlogContent />
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default Blog