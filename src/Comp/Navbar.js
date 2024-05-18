import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { SlHandbag } from "react-icons/sl";
import Dropdown from "../Compliances/Dropdown";
import { FaWhatsapp } from "react-icons/fa";

import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import logo2 from "../img/logo2.png"
import girl1 from "../img/girl.png"
import header1 from "../img/header1.png"
import header2 from "../img/header2.png"


const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const [state, setState] = useState(false);

  const changeState = () => {
    setState(!state);
  }


  return (
    <>
      <header>
        <div className='top_nav'>
          <div className='top_nav_details'>
            <div className="head_img">
              {/* <h6><Link to="contact"><IoIosCall />CONTACT US</Link></h6> */}
              <img src={header1} alt="" />


            </div>
          </div>
          <div className='top_nav_logo'>
            <div className='top_nav_logo1'>
              <img src={logo2} alt="" className='logo' />

            </div>

          </div>
          <div className='top_nav_details'>
            <div className='top_nav_icon'>

              <div className="head_img">
                {/* <Link><FaRegUser /></Link>
                <Link><FaRegHeart /></Link>
                <Link><MdOutlineShoppingBag /></Link> */}
                <img src={header2} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className='navbar'>
          <ul className="ul_list">
            <li className="list"><Link to="/">Home</Link></li>
            <li className="list"><Link to="/event">Event</Link></li>
            <li className="list"><Link to="/journey">Journey</Link></li>
            <li
              className="list"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link >Compliances</Link>
              {isDropdownVisible && <Dropdown />}
            </li>

            <li className="list"><Link to="/customization">Customization</Link></li>
            {/* <li className="list"><Link to="/what-we-do">What we do</Link></li> */}
            <li className="list"><Link to="/whatwedo">What we do</Link></li>




          </ul>
        </div>
      </header>

      <div className="formbold-main-wrapper hero_sec">

        <div>
          {state ?

            <div className="formbold-form-wrapper">
              <div className="form_sub_div_cont">
                <div className="formbold-form-header">
                  <h3>Let's chat? - Online</h3>
                  <button onClick={changeState}>


                    <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                      />
                    </svg>
                  </button>

                </div>

                <form
                  action="https://formbold.com/s/FORM_ID"
                  method="POST"
                  className="formbold-chatbox-form"
                >
                  <div className="formbold-mb-5">
                    <label htmlFor="name" className="formbold-form-label"> Your Name </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="formbold-form-input"
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label htmlFor="email" className="formbold-form-label"> Email Address </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="formbold-form-input"
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label htmlFor="message" className="formbold-form-label"> Message </label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Explain you queries"
                      className="formbold-form-input"
                    ></textarea>
                  </div>

                  <div>
                    <button className="formbold-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            : null}


          <button className="send_msg" onClick={changeState} >
            <div><img src={girl1} alt="" className="girl_img" /></div>
            <div>
              <p style={{ textAlign: "left", lineHeight: "1.3" }}>Hi there, have a question? Taxt us here.</p>
              <span className="bottom_arrow"></span>
            </div>
          </button>

          <div className="formbold-action-buttons">
            <button className="formbold-action-btn w-full" onClick={changeState} >
              <span className="formbold-cross-icon">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="formbold-chat-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
export default Navbar;
