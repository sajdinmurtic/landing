import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Services from './components/Services'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> 
          <Main />
          <Services />
          <Features />
          <Testimonials />
          <Footer />
        </Route>
        <Route path="/main"><Main /></Route>
        <Route path="/features"><Features /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/testimonials"><Testimonials /></Route> 
      </Switch>
    </Router>
  );
}

export default App;
