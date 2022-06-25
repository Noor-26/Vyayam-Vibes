import React from 'react'

function DetailCard({yoga}) {
    const {icon,title,description} = yoga
  return (
    <div class="col">
    <div class=" text-center h-100">
      <img src={icon} class="card-icons" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default DetailCard