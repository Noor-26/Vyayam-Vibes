import React from 'react'
import Wave from '../Shared/Wave/Wave'
import './Publications.css'
import { FaShoppingBasket } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Publications() {
  return (
    <div  className='d-block'> 
      <Helmet>
      <title>Publications - Vyayam Vibes</title>
      </Helmet>
  <div class="card-body text-center mx-auto landing_container d-block mt-5 pt-5 ">
  <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt=""/>
    <p className='public_text mt-3'>Publications</p>
    <p class="Public_header text-font mx-auto  ">HEALTH BOOKS FOR REFERENCE</p>
    <p className='mb-5'>We believe in the strength of connection, connection of your mind with your soul.</p>
  </div>
  <div className='wave_container'>
      <Wave tabindex="1"/>
  </div>


<div class=" mb-3 publicBook_container  " >
  <div class="row g-0 border shadow-lg public_card container mx-auto">
    
    <div class="col-md-6   h-100">
      <div class="card-body p-5">
        <h5 class="card-text_header">YOGA FOR MIND AND SOUL</h5>
        <p className='mt-4'>Yoga is far more than the physical postures, breathing practices or meditation. Yoga is the wisdom and practices that are the foundation of the healing lifestyle that blends spiritual framework, science and natural living.</p>
        <p className='my-5'>"Be free from fear , anxiety & addiction with the power of yoga."</p>
        <div>

        <button className="header_btn">Coming soon <FaShoppingBasket className='ms-2'/></button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <img
        src='https://vyayamvibes.in/vyayamvibes_media/2021/08/9aac4fa1-f7b3-4b1a-8ba8-3ba3b7df739c.jpg'
        alt=""
        class="img-fluid w-100 yoga-img my-auto h-100"
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default Publications