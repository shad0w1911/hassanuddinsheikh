import '../css/services.css';
import React from 'react';
import { Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faCode, faPaintBrush} from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
    render(){
        return(
            <div>
                <div className="headingTextHolder">
                    <h1>Services</h1>
                </div>
                    <ul className="servicesFlexContainer">
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faDesktop} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi laborum totam ipsum cumque voluptatibus, pariatur dignissimos aliquid quis dolores!</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faPaintBrush} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Graphics Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi laborum totam ipsum cumque voluptatibus, pariatur dignissimos aliquid quis dolores!</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faCode} size="2x"
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#0070D0', padding: '10px 0px'}}/>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi laborum totam ipsum cumque voluptatibus, pariatur dignissimos aliquid quis dolores!</p>
                            </div>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default Services;