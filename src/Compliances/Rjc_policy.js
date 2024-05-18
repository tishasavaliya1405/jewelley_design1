import React from "react";
import Footer from "../Comp/Footer";
import Instagram from "../Comp/Instagram";
import rjc_img from "../img/rjc_img.jpg"

const Rjc_policy = () => {
  return (
    <>
      <div>
        <h1 className="royal_rays">ROYAL RAYS</h1>
      </div>
      <section className="excellence_section">
        <div className="policies_supply_content">
          <div className="execellence_details_col1">
          <img src={rjc_img} alt="img" className="img"/>
          </div>
          <div className="rjc_compliance_policy">
          <h2>RJC Compliance Policy</h2>
          <p>
            Royal Rays Exports is a member of Responsible Jewellery Council –
            RJC and committed for ethical business practices and compliance with
            Code of Practices in all its business activities. The management of
            Royal Rays Exports shall implement responsible ethical, social and
            environmental practices throughout the diamond supply chain, from
            mine to retail. We being a responsible entity of diamond supply
            chain believe in consumer confidence in our trade and request our
            business partners to follow same. As a part of best endeavors and
            responsible business entity, we anticipate co-operation of our
            business partners in adopting the standard and ensuring that the
            entire diamond supply chain is compliant with respect to business,
            social and environmental responsibilities. We strongly encourage all
            our business partners to follow and implement the various
            requirements of the RJC code of practice and other prevailing trade
            standards. More information about the Compliance Program is
            available on www.responsiblejewellery.com For Royal Rays Exports
          </p>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default Rjc_policy;
