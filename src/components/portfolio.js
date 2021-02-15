import '../css/portfolio.css';
import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import se1 from '../Img/se1.png';
import atm1 from '../Img/atm1.png';
import trav1 from '../Img/trav1.png';
import fna1 from '../Img/fna1.png';
import mb1 from '../Img/mb1.png';
import gnm1 from '../Img/gnm1.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './navigation';
import { Footer } from './footer';

class Portfolio extends React.Component {
    
    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">
            <Container fluid="true" className="portfolio">
                <NavigationBar />
                <Container className="glass">
                    <div className="headingTextHolder">
                        <h1>Projects</h1>
                    </div>
                    <p  style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi repudiandae eaque debitis quisquam itaque, non ut quos et vitae fugit doloribus sint asperiores. Cum, beatae. Unde quam, mollitia animi delectus placeat voluptatibus provident sit doloribus, sint fugit veniam dolor eum rem hic ut dignissimos.</p>
                    <Row>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={se1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">Sarwar Enterprises</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="http://sarwarenterprises.org/" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={fna1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">FnA Store</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="https://shad0w1911.github.io/fnademo/index.html" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={atm1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">Amsons Textile Mills</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="https://shad0w1911.github.io/amsons/" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={mb1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">Malik Brothers</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="https://shad0w1911.github.io/Malik-Brothers-2/index.html" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={gnm1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">Great Northern Metal Co.</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="https://shad0w1911.github.io/GNM-Co/index.html" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg md>
                            <Card className="project">
                                <CardImg top width="100%" height="200px" src={trav1} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">Travelers</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <a href="https://shad0w1911.github.io/Travlers/" target="blank">
                                    <span><FontAwesomeIcon icon={faEye}/></span> Live View</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </Container>
            </ScrollAnimation>
        );
    }
}

export default Portfolio;