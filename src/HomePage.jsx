import React from 'react'
import Testimonial from './Testimonial'
import Midsection from './Midsection'
import Footer from './Footer'
// import Navbar from './Navbar'
import Header from './Header/Header'

function HomePage(){
    return(
        <div style={{overflowX:'hidden'}}>
            <Header/>
            <Midsection/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}
export default HomePage