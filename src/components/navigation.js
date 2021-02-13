import '../css/navigation.css';
import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render(){
        return(
        <Container fluid="true">
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{border:'none'}}>
                        <Container>
                            <h1>Portfolio</h1>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarColor03">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"><Link to="/" className="links">Home</Link></li>
                                    <li className="nav-item"><Link to="/about" className="links">About</Link></li>
                                    <li className="nav-item"><Link to="/portfolio" className="links">Portfolio</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="links gradient-border">Contact</Link></li>
                                </ul>
                            </div>
                        </Container>
                    </nav>
                </div>
            </header>
        </Container>
        );
    }
}

export default NavigationBar;