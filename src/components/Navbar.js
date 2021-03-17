import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = ( ) => {
  return (
  <header className="header-nav" role="banner">
    <nav class="navbar navbar-expand-md navbar-light sticky-top">
      <div className="container-fluid">  
        <div className="navbar-brand"> <img src={require('../assets/img/logo.png')} alt="logo"/> </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">

              <ul className="navbar-nav ml-auto">      
                  <li className="nav-link"><Link to='/'>ABOUT US</Link></li>
                  <li className="nav-link"><Link to='/'>STORIES</Link></li>
                  <li className="nav-link"><Link to='/'>CONTACT</Link></li>
                  <li className="nav-link"><Link to='/'>LOGIN</Link></li>
                  <li className="nav-link"><Link to='/'>SIGNUP</Link></li>
              </ul>
    
            </div>
      </div>
  </nav>
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <a class="p-2 link-secondary" href="#">MARKETPLACE</a>
      <a class="p-2 link-secondary" href="#">WHOLESALE CENTER</a>
      <a class="p-2 link-secondary" href="#">SELLER CENTER</a>
      <a class="p-2 link-secondary" href="#">SERVICES</a>
      <a class="p-2 link-secondary" href="#">INTERNSHIP</a>
      <a class="p-2 link-secondary" href="#">EVENTS</a>
    </nav>
  </div>
</header>



    
  )
}

export default Navbar;
