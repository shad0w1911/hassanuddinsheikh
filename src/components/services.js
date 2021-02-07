import '../css/services.css';
import React from 'react';
import { Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faCode, faPaintBrush} from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
    render(){
        return(
            <Container fluid="true" className="bg-light">
                <div className="headingTextHolder">
                    <h1>Services</h1>
                </div>
                    <ul className="servicesFlexContainer">
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faDesktop} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore ducimus nam iure recusandae eius odio, rem veniam voluptas praesentium.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faPaintBrush} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Graphics Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam facere ex laborum assumenda minima consequuntur debitis repellendus autem eum.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faCode} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae minus culpa tenetur voluptates maxime asperiores vitae harum adipisci omnis.</p>
                            </div>
                        </li>
                    </ul>
            </Container>
        );
    }
}

export default Services;