import React from 'react'
import Footer from './Footer'
import Instagram from './Instagram'
import video1 from "../img/dimond_video.mp4"
import home1 from "../img/home1.jpg"
import home2 from "../img/home2.jpg"
import home3 from "../img/home3.jpg"
import home4 from "../img/home4.jpg"
import home5 from "../img/home5.jpg"
import home6 from "../img/home6.jpeg"
import home7 from "../img/home7.jpeg"
const Home = () => {
  return (
    <>
      <div className='main_div'>
        <div className='hero_sec'>
          <video src={video1} autoPlay loop muted className='video'></video>
        </div>
      </div>

      {/* <video src='https://www.youtube.com/embed/kYOP52BUZTI?rel=0' typeof='video/mp4' autoPlay></video> */}
      {/* <iframe src="https://www.youtube.com/embed/kYOP52BUZTI?rel=0"   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe> */}
      <section className="excellence_section">
        <div className="container">
          <div className="execellence_title">
            <h2>EXCELLENCE AND PROFICIENCY
            </h2>
          </div>
          <div className="execellence_details">
            <div className="execellence_details_row">
              <img src={home6} alt="" className='img'/>
            </div>
            <div className="execellence_details_row">

              <div className="execellence_details_col1" data-aos="fade-right">
                <img src={home3} alt="" />
              </div>
              <div className="execellence_details_col2" data-aos="fade-left">
                <h3>Brilliant Cut</h3>
                <p>A brilliant cut is simply a diamond or any other gemstone cut in a particular form with numerous facets so to ensure exceptional brilliance.</p>
              </div>
            </div>
            <div className="execellence_details_row">

              <div className="execellence_details_col2" data-aos="fade-right">
                <h3>Step Cut</h3>
                <p>Stones whose outlines are either square or rectangular and whose facets are rectilinear and arranged parallel to the griddle known as step-or-step cut stones.</p>
              </div>
              <div className="execellence_details_col1" data-aos="fade-left">
                <img src={home4} alt="" />
              </div>
            </div>
            <div className="execellence_details_row">
              <div className="execellence_details_col1" data-aos="fade-right">
                <img src={home1} alt="" />
              </div>
              <div className="execellence_details_col2" data-aos="fade-left">
                <h3>EUROPEAN CUT / ROSE CUT / PORTRAIT CUT</h3>
                <p>These are one of the oldest cutting style for diamonds. Modern jewellery designers are creating Contemperary jewellery with an interesting old world vibe or by adding rose cut.</p>
              </div>
            </div>
            <div className="execellence_details_row">

              <div className="execellence_details_col2" data-aos="fade-right">
                <h3>EXQUISITE DIAMONDS</h3>
                <p>Royal Rays is the home to the world's most exquisite diamonds that continue to underline the legacy.</p>
              </div>
              <div className="execellence_details_col1" data-aos="fade-left">
                <img src={home2} alt="" />
              </div>
            </div>
            <div className="execellence_details_row">
              <div className="execellence_details_col1" data-aos="fade-right">
                <img src={home5} alt="" />
              </div>
              <div className="execellence_details_col2" data-aos="fade-left">
                <h3>FANCY COLOR</h3>
                <p>Natural Fancy colored diamonds are as rare as they exquisite. Royal Rays exports carries a variety of fancy colours in a range of shapes, sizes colours and clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="journey_section">
        <div data-aos="fade-up"
          data-aos-duration="3000">
          {/* <div className="journey_details" >
            <h6>THE</h6>
            <h4>Journey</h4>
            <h5>WELCOME TO THE WORLD OF Royal Rays.</h5>
            <p>Royal Rays has always believed in Innovation, Excellence and Proficiency.</p>
            <p>Since then,we have been striving to meet the highest standards of manufacturing each diamond.</p>
          </div> */}
          <img src={home7} alt="" className='img'/>
        </div>
      </section>

      <Instagram />

      <Footer />
    </>
  )
}

export default Home
