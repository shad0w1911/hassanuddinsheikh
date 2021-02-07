import './css/main.css';
import './css/bootswatch/bootstrap.css';
import React from 'react';
import About from './components/about';
import LandingPage from './components/landingPage';
import ContactPage from './components/contact';
import NavigationBar from './components/navigation';
import Skills from './components/skills';
import Portfolio from './components/portfolio';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <LandingPage/>
      <About/>
      <Skills/>
      <Portfolio/>
      <ContactPage/>
      
    </React.Fragment>
  );
}

export default App;
