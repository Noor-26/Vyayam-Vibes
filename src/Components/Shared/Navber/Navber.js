import React from 'react'
import icon from '../../../Images/icon.png'
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'
function Navber() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
  <a class="navbar-brand" href="#">
      <img src={icon}alt=""/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <CustomLink to='/' class="nav-link " >Home</CustomLink>
        </li>
        <li class="nav-item">
          <CustomLink to='/about' class="nav-link" href="#">About</CustomLink>
        </li>
        <li class="nav-item">
          <CustomLink to='/classes' class="nav-link" >Classes</CustomLink>
        </li>
        <li class="nav-item">
          <CustomLink class="nav-link" to='/publications'>Publications</CustomLink>
        </li>
        <li class="nav-item">
          <CustomLink to ='/contact' class="nav-link">Contact</CustomLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navber