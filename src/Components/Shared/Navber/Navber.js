import React from 'react'
import icon from '../../../Images/icon.png'
import {Link} from 'react-router-dom'
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
          <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to='/classess' class="nav-link" >Classess</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/publications'>Publications</Link>
        </li>
        <li class="nav-item">
          <Link to ='/contact' class="nav-link">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navber