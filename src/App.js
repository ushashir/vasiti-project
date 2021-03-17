import React from 'react';

import {BrowserRouter as Router, } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

// styling
// import './App.css';


function App() {
  return (
    <div className="container">
        <Router>
          <div className='App'>
            <Navbar />
            <Hero />
            <CustomerReviews />
            <br />
            <Footer />
          
          </div>
          
        </Router>
      </div>
  );
}

export default  App;
