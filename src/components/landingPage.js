import '../css/landingPage.css';
import React from 'react';
import { Container } from 'reactstrap';
class LandingPage extends React.Component {

    render(){
        return(
            <Container fluid="true">
                <div className="holder">
                    <div className="textHolder">
                        <h1>Hi, I'm Hassan</h1>
                        <h1>
                            Expert in Graphics Design<br/>
                            & Front End Development
                        </h1>
                    </div>
                </div>
            </Container>
        );
    }
}

export default LandingPage;