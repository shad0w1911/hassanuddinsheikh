import '../css/navigation.css';
import React from 'react';
import { Container } from 'reactstrap';

class NavigationBar extends React.Component {
    
    render(){
        return(
        <Container fluid="true" className="bg-light">
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Container>
                            <h1>Portfolio</h1>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarColor03">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">Home</li>
                                    <li className="nav-item">About</li>
                                    <li className="nav-item">Work</li>
                                    <li className="nav-item">Hire Me!</li>
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