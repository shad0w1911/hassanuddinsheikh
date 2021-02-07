import '../css/landingPage.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Services from './services';
class LandingPage extends React.Component {

    render(){
        return(
            <Container fluid="true">
                <Row className="bg-light">
                    <Col>
                        <div className="landingImageHolder"></div>
                    </Col>
                    <Col>
                        <div className="landingTextHolder">
                            <p className="primaryText">Hello, I'm Hassan</p>
                            <p className="secondaryText">Graphics Designer &<br/> Front End Developer</p>
                            <p className="paragraph">I design and code beautifully simple things, and I love what I do. Feel free to contact me for any project or collaboration.</p>
                            <button className="btn btn-lg landingButton">Hire Me</button>
                        </div>
                    </Col>
                </Row>
                <Services/>
            </Container>
            
        );
    }
}

export default LandingPage;