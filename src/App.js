import './css/main.css';
import './css/bootswatch/bootstrap.css';
import React from 'react';
import About from './components/about';
import LandingPage from './components/landingPage';
import ContactPage from './components/contact';
import NavigationBar from './components/navigation';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/footer';

function App() {
  return (

    <Router>
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={ContactPage}/>
          </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;