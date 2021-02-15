import '../css/contact.css'
import React from 'react';
import { Container, Row } from 'reactstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import ScrollAnimation from 'react-animate-on-scroll';
import { Footer } from './footer';
import NavigationBar from './navigation';

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
                                        <a href="" target="blank">
                                            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124010.svg?token=exp=1613356836~hmac=49be016bb83834ab8c0188943563d85d" 
                                            alt="facebook" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="https://www.instagram.com/hassaan_uddin_sheikh/?hl=en" target="blank">
                                            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124032.svg?token=exp=1613356836~hmac=60ab7dcb66e3f36a1a84f64781a7a3d2" 
                                            alt="instagram" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="" target="blank">
                                            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1613356836~hmac=82c6c41f34976a807cfbcfa2140f6092" 
                                            alt="twitter" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="" target="blank">
                                            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124037.svg?token=exp=1613356779~hmac=5aebf069e06ae9d10f699e1647633e06" 
                                            alt="dribbble" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="" target="blank">
                                            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124011.svg?token=exp=1613356836~hmac=432203fdbc1ca7f9b0f2ad65f804c847" 
                                            alt="linkedin" style={{backgroundColor:'#fff'}}/>
                                        </a>
                                        <a href="" target="blank">
                                            <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" 
                                            alt="github" style={{backgroundColor:'#fff'}}/>
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