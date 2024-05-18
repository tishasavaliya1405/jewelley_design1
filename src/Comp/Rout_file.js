import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom' 
import Home from './Home'
import Navbar from './Navbar'
import Contact from './Contact'
import Journey from './Journey'
import What_we_do from './What_we_do'
import Costomization from './Costomization'
import Events from './Events'
import Policies_supply_chain from '../Compliances/Policies_supply_chain'
import Rjc_policy from '../Compliances/Rjc_policy'
import Provenance_claim from '../Compliances/Provenance_claim'
import Whatwedo from './Whatwedo'

const Rout_file = () => {
  return (
    <>
      <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/event' element={<Events />}/>
        <Route path='/journey' element={<Journey />}/>
        {/* <Route path='/compliances' element={<Compliances />}/> */}
        <Route path='/customization' element={<Costomization /> }/>
        {/* <Route path='/what_we_do' element={<What_we_do />}/> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/whatwedo' element={<Whatwedo/>}></Route>

        {/* dropdown */}
        <Route path='/policies_suppliy' element={<Policies_supply_chain /> }/>
        <Route path='/rjc_policy' element={<Rjc_policy />}/>
        <Route path='/provenance_claim' element={<Provenance_claim/>} />
      </Routes>
      </HashRouter>
    </>
  )
}

export default Rout_file
