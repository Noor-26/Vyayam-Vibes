import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='main_box  '>
        <div className=' container   h-100'>
        <div className=" text-container">
      <h1 className=' pt-5 pb-3 text-font'> Practice anytime anywhere with awarded yoga instructor</h1>
      <p className='text-break pb-2' >Vyayam vibes is a giant exhale from the moment you walk in the door. We are your sacred break from the busy</p>
      <Link to="/contact" ><button className="header_btn">Contact Today</button></Link>
        </div>
       
        </div>
    </div>
  )
}

export default Header