import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import i1 from "../img/i1 (1).jpg"
import i2 from "../img/i1 (2).jpg"
import i3 from "../img/i1 (3).jpg"
import i4 from "../img/i1 (4).jpg"
import i5 from "../img/i1 (5).jpg"
import insta from "../img/instagram.png"


const Instagram = () => {

  return (
    <>

      <section className='instrgram_section'>
        <div className='container'>
          <div className='instagram'>
            <img src={insta} />
            <h1 className='h1_instra'><em>Instagram Shop</em></h1>
          </div>
          {/* <div className='instragram_title'>
            <h3><img src="./img/instagram.png" alt="" />SHOP OUR INSTAGRAM</h3>
          </div> */}
          <div className='instagram_card'>
            <div className='instagram_card_details'>
              <img src={i1} alt="" />
              <div className="middle">
                <div className="text"><FaInstagram style={{ color: "white", fontSize: "40px" }} />
                </div>
              </div>
            </div>
            <div className='instagram_card_details'>
              <img src={i2} alt="" />
              <div className="middle">
                <div className="text"><FaInstagram style={{ color: "white", fontSize: "40px" }} />
                </div>
              </div>
            </div>
            <div className='instagram_card_details'>
              <img src={i3} alt="" />
              <div className="middle">
                <div className="text"><FaInstagram style={{ color: "white", fontSize: "40px" }} />

                </div>
              </div>
            </div>
            <div className='instagram_card_details'>
              <img src={i4} alt="" />
              <div className="middle">
                <div className="text"><FaInstagram style={{ color: "white", fontSize: "40px" }} />
                </div>
              </div>
            </div>
            <div className='instagram_card_details'>
              <img src={i5} alt="" />
              <div className="middle">
                <div className="text"><FaInstagram style={{ color: "white", fontSize: "40px" }} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  )
}

export default Instagram

