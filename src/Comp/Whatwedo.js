import React from 'react'
import Instagram from './Instagram'
import Footer from './Footer'
import what1 from "../img/What2.jpg"
import what2 from "../img/What2.jpg"
import what3 from "../img/What3.jpg"

function Whatwedo() {
    return (
        <div>
            <>
                <div>
                    <h1 className='royal_rays'>ROYAL RAYS</h1>
                </div>

                <div className="ken-burns-slideshow">
                    <div className="bg_container">
                        <img src={what1} alt="" className='bg' />
                        <img src={what2} alt="" className='bg' />
                        <img src={what3} alt="" className='bg' />
                    </div>
                </div>
                <Instagram />
                <Footer />
            </>

        </div>
    )
}

export default Whatwedo
