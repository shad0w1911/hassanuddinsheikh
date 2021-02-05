import '../css/navigation.css';
import React from 'react';
import { Container } from 'reactstrap';

class NavigationBar extends React.Component {
    render(){
        return(
            
        <Container fluid="true" className="bg-light">
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Container>
                        <h1>Portfolio</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor03">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">Home</li>
                                <li class="nav-item">About</li>
                                <li class="nav-item">Work</li>
                                <li class="nav-item">Hire Me!</li>
                            </ul>
                        </div>
                    </Container>
                </nav>
            </div>
        </Container>
        );
    }
}

export default NavigationBar;