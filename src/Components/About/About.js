import React from 'react'
import Wave from '../Shared/Wave/Wave'
import { FaLocationArrow, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaQuora } from 'react-icons/fa';
import './About.css'
import { Helmet } from 'react-helmet';
function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Vyayam Vibes</title>
      </Helmet>
      <div class="card-body text-center mx-auto landing_container d-block mt-5 pt-5 mb-3" data-aos="fade-in" data-aos-duration="1200">
        <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt="" />
        <p className='public_text mt-3'>About Me</p>
        <p class="Public_header text-font mx-auto  p-1 ">MY WAY OF HEALTH & LIFE</p>
        <p className='mb-5 p-1'>‘You be you’ message is a call to action , a remainder that we have work to do in this life.</p>
        <a href='#scroll'><FaLocationArrow className='about_icon' /></a>
      </div>

      <div className='about_container h-100'>
        <Wave tabindex="1" />
        <div className='about_text-container' data-aos="fade-in" data-aos-duration="1000">

          <h1 className='card-text_header p-1' id='scroll' >VYAYAM VIBES</h1>
          <p className='py-5 about_text p-1'>
            Vyayam vibes was established in the year 2020. We are The top players in the category meditation classes in Meerut. We act as a one-stop destination servicing Customers both local and from other parts of Merrut. Over the course of our journey . We have Established a firm foothold in our industry. We Believe customer satisfaction as our ultimate goal.</p>
          <div className='about_links'>
            <a href='https://www.facebook.com/vyayamvibes' target='_blank' className="about_links-icons"><FaFacebookF /></a>
            <a href='https://twitter.com/vyayamvibes' target='_blank' className="about_links-icons"><FaTwitter /></a>
            <a href='https://www.instagram.com/vyayamvibes' target='_blank' className="about_links-icons"><FaInstagram /></a>
            <a href='https://www.linkedin.com/in/vyayamvibes' target='_blank' className="about_links-icons"><FaLinkedin /></a>
            <a href='https://www.quora.com/profile/Vyayam-Vibes' target='_blank' className="about_links-icons"><FaQuora /></a>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-evenly instructor_container'>
        <div className=''><img width="240" height='240' src='https://vyayamvibes.in/vyayamvibes_media/2018/10/yoga-instructor-free-img-2.jpg' className='img-fluid about_img' alt="" /><h5 className='pt-4 text-center img_title' data-aos="fade-up" data-aos-duration="1000">Yoga Instructor</h5></div>
        <div className=''><img width="240" height='240' src='https://vyayamvibes.in/vyayamvibes_media/2020/02/author-img-2.jpg' className='img-fluid about_img' alt="" /><h5 className='pt-4 text-center img_title' data-aos="fade-up" data-aos-duration="1000">Author</h5></div>
        <div className=''><img width="240" height='240' src='https://vyayamvibes.in/vyayamvibes_media/2018/10/nutritionist-free-img-2.jpg' className='img-fluid about_img' alt="" /><h5 className='pt-4 text-center img_title' data-aos="fade-up" data-aos-duration="1000">Nutritionist</h5></div>
      </div>
      <div class="card-body text-center mx-auto mission_container " data-aos="zoom-in" data-aos-duration="1200">
        <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt="" />
        <p class="mission_head mx-auto">MISSION</p>
        <p className='mb-5 mission_text mx-auto'>Our mission is to provide a genuine and sustainable yoga practice that will evolve the physical and emotional health of our Society. We want to spread the light of awareness among the People and help them build a stress free mind along with disease free body. Our ultimate aim is to make people experience the Truth, by realizing the true nature of themselves and the Universe. Then only one can become free from chain of cause and effect (karma) which brings us to earthly life again and Again. We are passionate about creating a space where every Body is a family. We also want to generate employment in the Country and encourage leadership quality.</p>
      </div>

    </div>

  )
}

export default About