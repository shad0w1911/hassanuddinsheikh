import '../css/landingPage.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Services from './services';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import NavigationBar from './navigation';
import { Footer } from './footer';
class LandingPage extends React.Component {

    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">
                <Container fluid="true" className="landing">
                    <NavigationBar/>
                    <Container className="home">
                    <Row>
                        <Col lg md>
                            <div className="landingTextHolder">
                                <p className="primaryText">Hello, I'm Hassan Uddin</p>
                                <p className="secondaryText">Graphics Designer & Front End Developer</p>
                                <p className="paragraph">I design and code beautifully simple things, and I love what I do.<br/>Feel free to contact me for any project or collaboration.</p>
                                <ul className="flipButtonHolder">
                                    <li>
                                        <div class="flip">
                                            <Link to="/contact">
                                                <div class="front">Contact Me</div>
                                                <div class="back">Contact Me</div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flip">
                                            <Link to="/about">
                                                <div class="front">Learn More</div>
                                                <div class="back">Learn More</div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Services/>
                    </Container>
                    <Footer/>
                </Container>
            </ScrollAnimation>
            
        );
    }
}

export default LandingPage;