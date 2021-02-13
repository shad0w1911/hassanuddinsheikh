import '../css/skills.css';
import React from 'react';
import { Container } from 'reactstrap';

class Skills extends React.Component {
    render(){
        return(
            <Container>
                <div className="headingTextHolder">
                    <h1>Skills</h1>
                </div>
                <div className="techToolsHolder">
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="html5"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css3"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/material-ui.png" alt="material-ui"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96   /000000/react-native.png" alt="reactJs"/>
                    </div>
                    <div>
                        <img src="https://cdn.volaresystems.com/Images/Posts/2019/12/aspnet_logo.png" alt="asp.net"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios-filled/100/000000/unity.png" alt="unity"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/microsoft-sql-server.png" alt="ms-sql"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/git.png" alt="git"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/fluent/96/000000/adobe-photoshop.png" alt="photoshop"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/adobe-illustrator.png" alt="illustrator"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/adobe-premiere-pro.png" alt="premiere"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/c-sharp-logo.png" alt="c#"/>
                    </div>
                    <div>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/figma-1693589-1442630.png" alt="figma"/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Skills;