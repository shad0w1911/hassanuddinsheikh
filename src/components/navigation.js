import '../css/navigation.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

class navigationBar extends React.Component {
    render(){
        return(
            
        <Container fluid="true">
            <div className={"flex-container"}>
                <header>
                    <nav>
                        <Row>
                            <Col>
                                <h3>Portfolio</h3>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Skills</li>
                                    <li>Portfolio</li>
                                    <li>Contact</li>
                                </ul>
                            </Col>
                        </Row>
                    </nav>
                </header>
            </div>
        </Container>
        );
    }
}

export default navigationBar;