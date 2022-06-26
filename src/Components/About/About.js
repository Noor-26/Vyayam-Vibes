import React from 'react'
import Wave from '../Shared/Wave/Wave'
import { FaLocationArrow,FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaQuora } from 'react-icons/fa';
import './About.css'
function About() {
  return (
    <div>
        <div class="card-body text-center mx-auto landing_container d-block mt-5 pt-5 ">
  <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt=""/>
    <p className='public_text mt-3'>About Me</p>
    <p class="Public_header text-font mx-auto  ">MY WAY OF HEALTH & LIFE</p>
    <p className='mb-5'>‘You be you’ message is a call to action , a remainder that we have work to do in this life.</p>
    <a href='#'><FaLocationArrow className='about_icon'/></a>
  </div>
        
      <div className='about_container h-100'>
      <Wave tabindex="1"/>
<div className='about_text-container'>

            <h1 className='card-text_header'>VYAYAM VIBES</h1>
            <p className='py-5 about_text'>Vyayam vibes was established in the year 2020. We are
The top players in the category meditation classes in
Meerut. We act as a one-stop destination servicing
Customers both local and from other parts of
Merrut. Over the course of our journey . We have
Established a firm foothold in our industry. We
Believe customer satisfaction as our ultimate goal.</p>
<div className='about_links'>
<a href='#' className="about_links-icons"><FaFacebookF/></a>
<a href='#' className="about_links-icons"><FaTwitter/></a>
<a href='#' className="about_links-icons"><FaInstagram/></a>
<a href='#' className="about_links-icons"><FaLinkedin/></a>
<a href='#' className="about_links-icons"><FaQuora/></a>
</div>
</div>
</div>
<div>
    
</div>
        </div>
    
  )
}

export default About