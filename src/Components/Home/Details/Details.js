import React, { useEffect, useState } from 'react'
import DetailCard from './DetailCard'
import './Details.css'

function Details() {
    const [yogas, setYogas] = useState([])
    useEffect(() => {
     fetch('Details.json')
     .then(res=>res.json())
     .then(data => setYogas(data))
    }, [])
    
  return (
    <div className='container py-5 details-container'>
        <div className='container'>
        <div class="text-center pt-5"  data-aos="zoom-in">
  <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt=""/>
  <div class="card-body text-center   mx-auto">
    <p class="card-text_header mx-auto  ">DIVE IN THE WORLD OF HEALTH & FITNESS</p>
    <p className='mb-5'>We believe in the strength of connection, connection of your mind with your soul.</p>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
  
{ yogas.map(yoga => <DetailCard key={yoga.id} yoga={yoga}/>)}
 
</div>
        </div>
    </div>
  )
}

export default Details