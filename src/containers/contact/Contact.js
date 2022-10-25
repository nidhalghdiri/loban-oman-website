import React , {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './Contact.css';
import Aux from '../../hoc/Auxliary';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BG from '../../assets/images/contactBG.png';
class Contact extends Component{
    render(){
        return(
           <Aux>
               <Header lien={true} />
               <div className="ContactContainer" style={{backgroundImage: "url('"+ BG +"')"}}>
                   <div className="ContactTitle">
                       <h1>Contact Us</h1>
                   </div>
               <Form className="ContactForm" action="mailto:lubandhofar100@gmail.com" method="post" enctype="text/plain">
                <Form.Group controlId="formBasicEmail" className="ContactFormGroup">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="Name" />
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="ContactFormGroup">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="Email"  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="ContactFormGroup">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="Message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="FormBtn">
                    Send
                </Button>
                </Form>
               </div>
                <Footer />
           </Aux> 
        );
    }
}

export default Contact;
