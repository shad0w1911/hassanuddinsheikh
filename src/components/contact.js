import '../css/contact.css'
import React from 'react';
import { Container, Row } from 'reactstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import ScrollAnimation from 'react-animate-on-scroll';
import { Footer } from './footer';
import NavigationBar from './navigation';

import dribble from '../Img/dribbble.svg';
import facebook from '../Img/facebook.svg';
import instagram from '../Img/instagram.webp';
import twitter from '../Img/twitter.svg';
import linkedin from '../Img/linkedin.svg';
import github from '../Img/github.svg';


export default function ContactPage() {

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
        .then((result) => {
            swal({
                title: "Message Sent Successfully",
                icon: "success"
            })
            console.log(result.text);
        }, (error) => {
            swal({
                title: "Message Sending Failed",
                icon: "error"
            })
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <ScrollAnimation animateIn="fadeIn">
            <Container fluid="true" className="contact" id="#contact">
            <NavigationBar />
                <Container>
                    <div>
                        <Row className="formContainer">
                            <form className="contact-form was-validated form" onSubmit={sendEmail}>
                                <div style={{textAlign:'center',color:'#fff', textTransform:'uppercase', letterSpacing:'4px'}}>
                                    <h1>Contact Me</h1>
                                </div>
                                <div className="form-group">
                                    <div className="socialIcons">
                                        <a href="https://www.facebook.com/hassoo.sheikh/" target="blank">
                                            <img src={facebook} alt="facebook" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://www.instagram.com/hassaan_uddin_sheikh/?hl=en" target="blank">
                                            <img src={instagram} alt="instagram" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://twitter.com/hassoosheikh" target="blank">
                                            <img src={twitter} alt="twitter" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://dribbble.com/hassoosheikh" target="blank">
                                            <img src={dribble} alt="dribbble" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/hassaan-uddin-sheikh-213474185/" target="blank">
                                            <img src={linkedin} alt="linkedin" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://github.com/shad0w1911/fnademo" target="blank">
                                            <img src={github} alt="github" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" name="name" placeholder="Name" className="form-control" required
                                    />
                                    <div class="valid-feedback" style={{color:'#fff'}}>Valid.</div>
                                    <div class="invalid-feedback" style={{color:'#fff'}}>Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" name="subject" placeholder="Subject"  className="form-control" required
                                    />
                                    <div class="valid-feedback" style={{color:'#fff'}}>Valid.</div>
                                    <div class="invalid-feedback" style={{color:'#fff'}}>Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" name="email" placeholder="Email"  className="form-control" required
                                    />
                                    <div class="valid-feedback" style={{color:'#fff'}}>Valid.</div>
                                    <div class="invalid-feedback" style={{color:'#fff'}}>Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        type="textarea" name="message" placeholder="Message" className="form-control" rows="5" required
                                    />
                                    <div class="valid-feedback" style={{color:'#fff'}}>Valid.</div>
                                    <div class="invalid-feedback" style={{color:'#fff'}}>Please fill out this field.</div>
                                </div>
                                <input type="submit" value="Send" className="btn btn-lg btn-outline-success"/>
                            </form>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </Container>
        </ScrollAnimation>
    );
}