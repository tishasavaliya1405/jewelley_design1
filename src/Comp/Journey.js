import React from 'react'
import Footer from './Footer'
import Instagram from './Instagram'

const Journey = () => {
  return (
    <>
      <div>
        <h1 className="royal_rays">ROYAL RAYS</h1>
      </div>

      <section className="journey_section">
        <div  data-aos="fade-up"
     data-aos-duration="3000">
          <div className="journey_details" >
            <h6>THE</h6>
            <h4>Journey</h4>
            <h5>WELCOME TO THE WORLD OF Royal Rays.</h5>
            <p>Royal Rays has always believed in Innovation, Excellence and Proficiency.</p>
            <p>Since then,we have been striving to meet the highest standards of manufacturing each diamond.</p>
          </div>
        </div>
      </section>

      <div className='timeline'>
        <div className='container left-container' >
          <h4>1</h4>
          <div className='text_box'>
            <h6>1980's - 1990's</h6>
            <h2>SINGLE CUT DIAMONDS
            </h2>
            <p>1980's - 1990's SINGLE CUT DIAMONDS A single cut on the other hand is a simple form of cutting a round diamond with only 17 or 18 facets. If you compare a Single Cut Diamond (usually small Carat Weights of 1.2mm or less), to a Full Cut Diamond (58 facets), you’d quickly see the difference. Small high quality single cut diamonds are highly prized especially in the watch industry, and because there are fewer but larger facets, they give off a majestic dance of light and colour, that is often lost in a sea of white light with the full cut stones

            </p>
            <span className='left_container_arrow'></span>
          </div>

        </div>
        <div className='container right-container' >
          <h4>2</h4>
          <div className='text_box'>
            <h6>2000's
            </h6>
            <h2>BRILLIANT CUT DIAMONDS
            </h2>
            <p>A brilliant cut is simple a diamond or other gemstone cut in a particular form with numerous facets so as to have exceptional brilliance. The shape resembles of a cone and provides maximised light return through the top of a diamond. Round Brilliant Cuts are moreover used in modern jewellery. A brilliant cut is simply a diamond or any other gemstone cut in a particular form with numerous facets so to ensure exceptional brilliance.

            </p>
            <span className='right_container_arrow'></span>

          </div>

        </div>
        <div className='container left-container'>
          <h4>3</h4>
          <div className='text_box'>
            <h6>2008</h6>
            <h2>ROSE CUT DIAMONDS
            </h2>
            <p>2008 ROSE CUT DIAMONDS The rose cut is one of the oldest cutting style for diamonds mordern jewellery designers are creating edges(Contemparory jewellery with an interesting, old world vibe by adding rose cut. The ancient art of faceting a stone to look like an opening nose, originated in India in the 16th century. The result is a stone that is still coveted today by high-end designers and consumers alike. This brilliant time-honored cut allows light to reflect within 24 domed facets(Size 0.01 to 20.00 cts), Colour(o-z.natural fancy colour).

            </p>
            <span className='left_container_arrow'></span>

          </div>

        </div>
        <div className='container right-container'>
          <h4>4</h4>
          <div className='text_box'>
            <h6>2012
            </h6>
            <h2>FANCY COLOURED DIAMONDS
            </h2>
            <p>Natural, Intense fancy coloured diamonds are as rare as they exquisite. Royal Rays exports carries a variety of fancy colours in a range of shapes, sizes, colours and clarity. They are 100% natural and un-treated with heat or chemicals so not to compromise their value or quality.

            </p>
            <span className='right_container_arrow'></span>

          </div>

        </div>
        <div className='container left-container'>
          <h4>5</h4>
          <div className='text_box'>
            <h6>2015</h6>
            <h2>STEP CUT DIAMONDS
            </h2>
            <p>Stones whose outlines are either square or rectangular and whose facets are rectilinear and arranged parallel to the griddle known as step-or-step cut stones. These stones often have their corners truncated creating an embrald cut with octagonal outline.

            </p>
            <span className='left_container_arrow'></span>

          </div>

        </div>

      </div>
      <Instagram />
      <Footer />
    </>
  )
}

export default Journey
