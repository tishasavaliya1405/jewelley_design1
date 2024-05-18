



import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdMail } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import logo2 from "../img/logo2.png"

function Footer() {
    return (
        <>
            <footer>
                
                <div className=' footer_home_area footer_home_img'>
              
                    <div className='footer_main_div'>
                        <div className='footer_sub_cont_div footer_page_nav'>
                            {/* <h3>Menu</h3> */}
                            <div className='top_nav_logo1'>
                      <img src={logo2} alt="" className='logo'/>

                  </div>
                        </div>
                        <div className='footer_sub_cont_div footer_contact_div'>
                          
                             <h5><FaLocationDot/> Mumbai Office</h5>
                            <p>DC-7260, Bharat Diamond Bourse, BKC, Bandra East, Mumbai, Maharashtra 400051</p>
                            <h5><FaLocationDot/>Belgium Office</h5>
                            <p>341, Hoveniersstraat 2, 2018 Antwerpen, Belgium.</p>
                        </div>
                        <div className='footer_contact_div footer_sub_cont_div'>
                          
                            <p><Link><IoCallSharp className='icon' />+91 7045356688</Link></p>
                            <p><Link target='blank'><MdMail className='icon' />bvroyalrays@gmail.com</Link></p>
                            <p><Link to="https://www.google.com/maps" target='blank'><FaMapSigns className='icon' />Google Map</Link></p>
                        </div>

                        <div className='footer_sub_cont_div footer_page_nav'>
                            
                            <Link className='icon_link'><FaInstagram  style={{ color: "#e4405f" }} /></Link>
                            <Link className='icon_link'><FaYoutube  style={{ color: "red" }} /></Link>
                            {/* <Link className='icon_link'><FaSkype className='icon' style={{ color: "#00aff0" }} /></Link> */}
                            <Link className='icon_link'><FaLinkedinIn  style={{ color: "#0077b5" }} /></Link>
                            <Link className='icon_link'><FaWhatsapp  style={{ color: "#25d366" }} /></Link>
                            {/* <Link className='icon_link'><FaWeixin className='icon' style={{ color: "#7bb32e" }} /></Link>
                            <Link className='icon_link'><FaTwitter className='icon' style={{ color: "#1da1f2" }} /></Link> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer