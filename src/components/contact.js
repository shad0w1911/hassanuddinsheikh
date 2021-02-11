import '../css/contact.css'
import React from 'react';
import {Container, FormGroup, Input, Row } from 'reactstrap';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { AvForm, AvField } from 'availity-reactstrap-validation';
init("user_Mu467CxqNH5EBSLdxX6cB");

export default function ContactPage() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yvm70vq', 'template_7f4wkzd', e.target, 'user_Mu467CxqNH5EBSLdxX6cB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <Container fluid="true" className="bg-light contact">
            <div className="headingTextHolder">
                <h1>Contact Me</h1>
            </div>
            <Container>
                <div>
                    <Row className="formContainer">
                        <AvForm className="contact-form" onSubmit={sendEmail}>
                            <FormGroup>
                                <AvField 
                                    type="text" name="name" placeholder="Name" className="contactInput"
                                    validate={{
                                        required: {value: true, errorMessage: 'Please enter your name'},
                                        pattern: {value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters'}
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <AvField type="email" name="email" placeholder="Email"  className="contactInput" 
                                    validate={{
                                        required: {value: true, errorMessage: 'Please enter a valid email'}
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <AvField type="text" name="subject" placeholder="Subject"  className="contactInput" 
                                    validate={{
                                        required: {value: true, errorMessage: 'Please enter a subject'}
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <AvField type="textarea" name="message" placeholder="Message" className="contactTextArea" min-height="400" 
                                    validate={{
                                        required: {value: true, errorMessage: 'Please enter a message'},
                                        minLength: {value: 20, errorMessage: 'Your message must contain 15 characters'}
                                    }}
                                />
                            </FormGroup>
                            <Input type="submit" value="Send" className="btn btn-lg contactButton"/>
                        </AvForm>
                    </Row>
                </div>
            </Container>
        </Container>
    );
}