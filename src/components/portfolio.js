import '../css/portfolio.css';
import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import se1 from '../Img/se1.png';
import atm1 from '../Img/atm1.png';
import trav1 from '../Img/trav1.png';
import fna1 from '../Img/fna1.png';
import mb1 from '../Img/mb1.png';
import gnm1 from '../Img/gnm1.png';
import ScrollAnimation from 'react-animate-on-scroll';

class Portfolio extends React.Component {
    
    render(){
        return(
            <ScrollAnimation animateIn="slideInUp">
            <Container fluid="true" className="bg-light">
                <div className="headingTextHolder">
                    <h1>Portfolio</h1>
                </div>
                <br/>
                <Container>
                        <Row>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={se1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">Sarwar Enterprises</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={fna1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">FnA Store</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={atm1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">Amsons Textile Mills</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={mb1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">Malik Brothers</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={gnm1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">Great Northern Metal Co.</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg md>
                                <Card>
                                    <CardImg top width="100%" height="200px" src={trav1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h3">Travelers</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Link>Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </Container>
            </ScrollAnimation>
        );
    }
}

export default Portfolio;