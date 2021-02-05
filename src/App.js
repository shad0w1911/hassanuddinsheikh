import './css/main.css';
import './css/bootswatch/bootstrap.css';
import React from 'react';
import About from './components/about';
import LandingPage from './components/landingPage';
import Portfolio from './components/portfolio';
import ContactPage from './components/contact';
import Skills from './components/skills';
import NavigationBar from './components/navigation';

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
