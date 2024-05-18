import React from "react";
import Footer from "./Footer";
import Instagram from "./Instagram";

const Contact = () => {
  return (
    <>

      <section className="excellence_section main_div">
        <div className="execellence_title">
          <h4 className="contact_heading"><i>CONTACT INFO STYLE</i></h4>
          <p className="border"></p>
        </div>

        <div className="contact_main_div">
          <div>
            <h3>WHERE TO REACH US</h3>
            <p>You can reach us at the following</p>
            <address>Address: Bharat Diamond Bourse, Mumbai - 400051.</address>
          </div>

          <div>
            <h3>EMAIL US @</h3>
            <p>Email your issues and suggestion for the following</p>
            <address>Email Addresses: bvroyalrays@gmail.com</address>
          </div>
        </div>

        <div className="execellence_title">
          <h4 className="contact_heading"><i>CONTACT FORM STYLE</i></h4>
          <p className="border"></p>
        </div>

        <div className="form_main_div_cont">
          <form action="">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" placeholder="FullName"/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" placeholder="your@email.com"/>
            </div>
            <div>
              <label htmlFor="">Subject</label>
              <input type="text" name="" id="" placeholder="Subject"/>
            </div>
            <div>
              <label htmlFor="">Your Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Write Your Message"></textarea>
            </div>
            <button type="button" className="btn">Send Your Message</button>
          </form>
        </div>
      </section>

      <div>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1VnYC6EugmolDY9RjsZ77TeXstyj0288&q=Mota+Varachha,+Surat,+Gujarat&center=21.2452247,72.864978&zoom=14"
          frameborder="0"
        ></iframe>
      </div>
     <Instagram />
      <Footer />
    </>
  );
};

export default Contact;
