import '../css/about.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';
import Image from '../Img/profileImg.jpg';
import NavigationBar from './navigation';
import { Footer } from './footer';


class About extends React.Component{
    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">
                <Container fluid="true" className="about">
                    <NavigationBar/>
                    <Container className="aboutFlexContainer">
                        <div className="headingTextHolder">
                            <h1>About Me</h1>
                        </div>
                        <Row className="aboutProfile">
                            <Col lg="4" md="4">
                                <img src={Image} alt="profileImage" className="ProfileImg img-fluid"/>
                            </Col>
                            <Col className="profile">
                                <h1 className="mt-3">Front End Developer & Graphics Designer</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas aliquam, eligendi alias beatae a similique praesentium quae officia, soluta reprehenderit in quidem iure eius quo? Earum nesciunt quas magni, expedita dolorem perferendis labore nemo repellendus dignissimos? Libero ut eos minima sit eum possimus repellat officiis deserunt tempore ea ipsam qui expedita maiores corrupti culpa ipsum obcaecati quasi nesciunt, quis, alias, eius asperiores officia quo. Quidem suscipit facere ipsam doloremque modi harum reprehenderit adipisci, voluptatem est veniam similique enim ab voluptates vitae in consequuntur maxime ipsa esse ut provident perferendis blanditiis cumque eveniet! Velit cum ipsum veritatis totam? Nulla, aspernatur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas aliquam, eligendi alias beatae a similique praesentium quae officia, soluta reprehenderit in quidem iure eius quo? Earum nesciunt quas magni, expedita dolorem perferendis labore nemo repellendus dignissimos? Libero ut eos minima sit eum possimus repellat officiis deserunt tempore ea ipsam qui expedita maiores corrupti culpa ipsum obcaecati quasi nesciunt, quis, alias, eius asperiores officia quo. Quidem suscipit facere ipsam doloremque modi harum reprehenderit adipisci, voluptatem est veniam similique enim ab voluptates vitae in consequuntur maxime ipsa esse ut provident perferendis blanditiis cumque eveniet! Velit cum ipsum veritatis totam? Nulla, aspernatur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas aliquam, eligendi alias beatae a similique praesentium quae officia, soluta reprehenderit in quidem iure eius quo? Earum nesciunt quas magni, expedita dolorem perferendis labore nemo repellendus dignissimos? Libero ut eos minima sit eum possimus repellat officiis deserunt tempore ea ipsam qui expedita maiores corrupti culpa ipsum obcaecati quasi nesciunt, quis, alias, eius asperiores officia quo. Quidem suscipit facere ipsam doloremque modi harum reprehenderit adipisci, voluptatem est veniam similique enim ab voluptates vitae in consequuntur maxime ipsa esse ut provident perferendis blanditiis cumque eveniet! Velit cum ipsum veritatis totam? Nulla, aspernatur.</p>
                                
                            </Col>
                        </Row>
                        <br/>
                        <Skills/>
                    </Container>
                    <Footer />
                </Container>
            </ScrollAnimation>
        );
    }
}

export default About;