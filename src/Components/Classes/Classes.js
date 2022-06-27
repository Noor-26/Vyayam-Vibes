import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import DetailCard from '../Home/Details/DetailCard'
import Wave from '../Shared/Wave/Wave'
import './Classes.css'
import Faq from './Faq/Faq'
import GroupClass from './GroupClass/GroupClass'
import PersonalClass from './PersonalClass/PersonalClass'
function Classes() {
    const [yogas, setYogas] = useState([])
    useEffect(() => {
     fetch('Classes.json')
     .then(res=>res.json())
     .then(data => setYogas(data))
    }, [])
  return (

    <div>
         <Helmet>
      <title>Classes - Vyayam Vibes</title>
      </Helmet>
    <div class="card-body text-center mx-auto landing_container d-block mt-5 pt-5 ">
  <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt=""/>
    <p className='public_text mt-3'>Classes</p>
    <p class="Public_header text-font mx-auto  ">SHAKE RATTLE AND ROAR</p>
    <p className='mb-5 mission_text mx-auto'>We have a wide range of services to cater to the varied requirements of our customers like meditation, power Yoga, hatha yoga, aerobics, Zumba, yoga for pre and postnatal pregnancy and much more. We offer our services both online and offline (in Meerut) with options of group classes and private classes.</p>
  </div>
  <div className='classes_container h-100'>
      <Wave tabindex="1"/>
<div className='container my-5 details-container'>
        <div className='container'>
        <div class="text-center" >
  <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt=""/>
  <div class="card-body text-center w-50 mx-auto">
    <p class="card-text_header mx-auto  ">DIVE IN THE WORLD OF HEALTH & FITNESS</p>
    <p className='mb-5'>We believe in the strength of connection, connection of your mind with your soul.</p>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
  
{ yogas.map(yoga => <DetailCard key={yoga.id} yoga={yoga}/>)}
 
</div>
        </div>
    </div>
</div>
<PersonalClass/>
<GroupClass/>
<Faq/>

    </div>
  )
}

export default Classes