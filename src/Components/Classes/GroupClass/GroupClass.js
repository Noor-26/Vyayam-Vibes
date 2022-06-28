import React, { useEffect, useState } from 'react'
import ClassCard from '../PersonalClass/ClassCard'

function GroupClass() {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch('GroupClass.json')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])
  return (
    <div className='personalClass_container '>
      <div class="card-body text-center mx-auto pt-5 ">
        <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt="" />
        <h2 class=" card-text_header mx-auto mb-5 ">GROUP CLASSES</h2>

      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
        {classes.map(slot => <ClassCard key={slot.id} slot={slot} />)}

      </div>
    </div>
  )
}

export default GroupClass