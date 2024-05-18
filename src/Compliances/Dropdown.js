import React from 'react'
import { Link } from 'react-router-dom';


const Dropdown = () => {
    
  return (
    <>
        <div className='dropdown-menu'>
      <ul className='ul'>
        <li><Link className='static' to="/policies_suppliy">POLICIES-SUPPLY-CHAIN</Link></li>
        <li><Link className='static' to="/rjc_policy">RJC POLICY</Link></li>
        <li><Link className='static' to="/provenance_claim">PROVENANCE CLAIM</Link></li>
        
      </ul>
      </div>
      
    </>
  );
};

export default Dropdown;
