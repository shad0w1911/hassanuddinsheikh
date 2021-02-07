import '../css/about.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


class About extends React.Component{
    render(){
        return(
            <ScrollAnimation animateIn="fadeInUp">
                <Container fluid="true" className="bg-light">
                    <Container className="aboutFlexContainer">
                        <div className="headingTextHolder">
                            <h1>About Me</h1>
                        </div>
                        <Row  className="aboutProfile">
                            <Col className="aboutProfileImg"></Col>
                            <Col className="aboutProfileText">
                                <h1>Front End Developer & Graphics Designer</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quisquam velit maiores tempora nesciunt nihil, quam, doloribus maxime atque tempore, libero autem nobis adipisci quia eos aliquid voluptate voluptas deleniti!</p>
                                <Row className="aboutListHolder">
                                    <Col>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faChevronRight} className="aboutIcon"/>
                                                <span>Birthday:</span> 25 February
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faChevronRight} className="aboutIcon"/>
                                                <span>Email:</span> hassanuddin@protonmail.com
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faChevronRight} className="aboutIcon"/>
                                                <span>City:</span> Karachi
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faChevronRight} className="aboutIcon"/>
                                                <span>Freelance:</span> Available
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore ratione iure, ipsam deserunt consequuntur quos rem iusto itaque laborum nemo at minima. Quidem fugit non sit vero voluptatibus eum!</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </ScrollAnimation>
        );
    }
}

export default About;