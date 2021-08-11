import React from 'react'

const Nav = () => {
 return (
  <header>
   <div class="logo"><img src="https://www.askmediagroup.com/wp-content/uploads/2017/07/ask_logo_mg-FINAL.png" alt="logo" /></div>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav>
      <ul>
        <li><a href="#" class="fs-14">Culture</a></li>
        <li><a href="#" class="fs-14">Technology</a></li>
        <li><a href="#" class="fs-14">Careers</a></li>
        <li><a href="#" class="fs-14">Team</a></li>
        <li><a href="#" class="fs-14">Contact Us</a></li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label" id="navtoggle">
      <span>
        <i class="fas fa-bars fs-20"></i>
      </span>
    </label>
  </header>
 )
}

export default Nav
