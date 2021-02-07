import '../css/resume.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

class Resume extends React.Component{
    render(){
        return(
            <Container fluid="true" className="bg-light">
                <Container>
                    <div className="headingTextHolder">
                        <h1>Resume</h1>
                    </div>
                    <div className="resume">
                        <div>
                            <Row>
                                <Col>
                                    <h1>Summary</h1>
                                    <ul className="bullets">
                                        <li>
                                            <p className="resumeTitle">Hassan Uddin Sheikh</p>
                                            <p className="resumeDescription">Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                                        </li>
                                    </ul>
                                    <h1>Education</h1>
                                    <ul className="bullets">
                                        <li>
                                            <p className="resumeTitle">ACCP-Pro</p>
                                            <p className="resumeDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, architecto.</p>
                                        </li>
                                        <li>
                                            <p className="resumeTitle">Matriculation</p>
                                            <p className="resumeDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, cumque.</p>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h1>Work Experience</h1>
                                    <ul className="bullets">
                                        <li>
                                            <p className="resumeTitle">Design Vaults</p>
                                            <p className="resumeDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi autem porro dolores aut provident tempore nobis, sapiente amet accusamus a at expedita. Numquam excepturi architecto odio incidunt quibusdam ipsum!</p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Container>
        );
    }
}

export default Resume;