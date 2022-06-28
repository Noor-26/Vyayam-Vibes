import React from 'react'
import './Benefit.css'
import yogaImg from '../../../Images/yoga-image.jpg'
import { Link } from 'react-router-dom'
function Benefit() {
  return (
    <div class=" mb-3 benefit_container" >
  <div class="row g-0">
    <div class="col-md-6">
      <img
        src={yogaImg}
        alt=""
        class="img-fluid yoga-img my-auto py-5 h-100"
      />
    </div>
    <div class="col-md-6  benefit_card h-100">
      <div class="card-body p-5">
        <h5 class="card-text_header">BENEFITS OF YOGA​</h5>
        <ul className='p-1 p-md-5'>
            <li>Better body image: focusing inward during yoga helps you be more satisfied with your body and less critical of it.</li>
            <li>Heart benefits: yoga can help lower blood pressure, cholesterol and blood sugar, all of which are good for your heart and blood vessels.</li>
            <li>Overall fitness: practicing yoga a couple times a week increases muscle strength and flexibility, boosts endurance, and tunes up your heart, lungs and blood vessels.</li>
            <li>Mindful eating being more aware of how your body feels carries over to mealtimes as you savor each bite or sip and notice how food smells, tastes and feels in mouth.</li>
            <li>Weight control: mindfulness developed through yoga can make you more sensitive to cues of hunger and fullness, which help you develop a more positive relationship with food.</li>
        </ul>
        
      <Link to="/contact" ><button className="header_btn">Be fit today</button></Link>

      </div>
    </div>
  </div>
</div>
  )
}

export default Benefit