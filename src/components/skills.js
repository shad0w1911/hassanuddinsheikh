import '../css/skills.css';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';

class Skills extends React.Component {
    render(){
        return(
            <ScrollAnimation animateIn="fadeInUp">
                <Container fluid="true" className="bg-light">
                    <Container>
                        <div className="headingTextHolder">
                            <h1>Skills</h1>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </div>
                        </div>
                    </Container>
                </Container>
            </ScrollAnimation>
        );
    }
}

export default Skills;