import React from 'react'
import Footer from './Footer'
import Instagram from './Instagram'
import custom1 from "../img/Custom-1.jpg"
import custom2 from "../img/Custom-2.jpg"
import custom3 from "../img/Custom-3.jpg"
import custom4 from "../img/Custom-4.jpg"
import custom5 from "../img/Custom-5.jpg"


const Costomization = () => {
  return (
    <>
        <div className='main_div'>
    <div className='hero_sec'>
     <h1 className='hero_sec_title' >ROYAL RAYS</h1>
     <img src={custom1} alt="" className='img'/>
     </div>
     </div>
     
      <section className="excellence_section">
        <div className="container ">
          <div className="execellence_title">
            <h2>EXCELLENCE AND PROFICIENCY
            </h2>
          </div>
          <div className="execellence_details">
            <div className="execellence_details_row">
              <div className="execellence_details_col1"  data-aos="fade-right">
                <img src={custom2} alt="" />
              </div>
              <div className="execellence_details_col2"   data-aos="fade-left">
                <h3>Customer Ideas</h3>
                <p>At Royal Rays, we recognize your IDEAS as well as you do. So whether you begin with just an imagination or a full-ﬂedged design concept, we will work actively with you to help provide you perfect set of Diamonds for your jewellery.</p>
              </div>
            </div>
            <div className="execellence_details_row">

              <div className="execellence_details_col2"  data-aos="fade-right">
                <h3>CUSTOMER PROCUREMENT</h3>
                <p>Once we have a custom design, we will CUT all the diamonds necessary as per the measurements. Our trained craftsmen will match every diamond’s gauge to the design requirements, ensuring the correct cut and quality of diamonds.</p>
              </div>
              <div className="execellence_details_col1"  data-aos="fade-left">
                <img src={custom3} alt="" />
              </div>
            </div>
            <div className="execellence_details_row">
              <div className="execellence_details_col1"  data-aos="fade-right">
                <img src={custom4} alt="" />
              </div>
              <div className="execellence_details_col2"  data-aos="fade-left">
                <h3>MANUFACTURING EXPERTISE</h3>
                <p>Our in-house team of highly-trained Craftsmen will then use the design as a blueprint to craft your customized diamonds. By combining old-world charm with new-age techniques, the Diamonds will be provided for the beautiful piece that it is meant to be.</p>
              </div>
            </div>
            <div className="execellence_details_row">

              <div className="execellence_details_col2"  data-aos="fade-right">
                <h3>BESPOKE CREATIONS</h3>
                <p>Royal Rays guarantees customer satisfaction, trust and door to door delivery across the Globe.</p>
              </div>
              <div className="execellence_details_col1"  data-aos="fade-left">
                <img src={custom5} alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Instagram />
      <Footer />
    </>
  )
}

export default Costomization
