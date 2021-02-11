import './css/main.css';
import './css/bootswatch/bootstrap.css';
import React from 'react';
import About from './components/about';
import LandingPage from './components/landingPage';
import ContactPage from './components/contact';
import NavigationBar from './components/navigation';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router,Switch,Link, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <React.Fragment>
        <NavigationBar/>
        <LandingPage/>
        <About/>
        <Skills/>
        <Portfolio/>
        <ContactPage/>
        
      </React.Fragment>
    </Router>
  );
}

export default App;
