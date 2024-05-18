import React from 'react'
import Footer from './Footer'
import Instagram from './Instagram'
import event1 from "../img/events-1.jpg"
import event2 from "../img/events-2.jpg"
import event3 from "../img/events-3.jpg"
import event4 from "../img/events-4.jpg"
import event5 from "../img/events-5.jpg"

const Events = () => {
  return (
    <>
      <div>
        <h1 className="royal_rays">ROYAL RAYS</h1>
      </div>

      <div className='event_detail_main_div execellence_title'>
        <h2>EVENTS UPDATES</h2>
        <p>WE EXHIBIT IN THE FOLLOWING SHOWS</p>

        <div className='event_card_detail'>
          <div>
            <img src={event1} alt="" className='img'/>
            <div className='event_card'><p>GemGeneve</p></div>
          </div>
          <div>
            <img src={event2} alt="" />
            <div className='event_card'><p>Jewellery Arabia</p></div>
            <img src={event4} alt="" />
            <div className='event_card'><p>Vicenzaoro</p></div>
          </div>

          <div>
            <img src={event3} alt="" />
            <div className='event_card'><p>Jewellery & Gem World Singapore</p></div>
            <img src={event5} alt="" />
            <div className='event_card'><p>Miami Beach Antique Show</p></div>
          </div>

        </div>
      </div>
     <Instagram />
      <Footer />
      
    </>
  )
}

export default Events
