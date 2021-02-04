import './css/main.css';
import React from 'react';
import About from './components/about';
import LandingPage from './components/landingPage';
import Portfolio from './components/portfolio';
import ContactPage from './components/contact';
import Skills from './components/skills';
import navigationBar from './components/navigation';

function App() {
  return (
    <React.Fragment>
      <navigationBar/>
      <LandingPage/>
      <About/>
      <Skills/>
      <Portfolio/>
      <ContactPage/>
    </React.Fragment>
  );
}

export default App;
