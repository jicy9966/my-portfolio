import "./contact.scss";
import React, { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { send_mail } from "../../utils/images";
import emailjs from '@emailjs/browser';

const ContactPage = () =>
{
    const form = useRef();

    const sendEmail = (e) => 
    {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9gd5ask', 'template_477krfr', form.current, {
            publicKey: 'iuH_KkP0KGEqo7rdx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };

    return(
        <div className="page-wrap">
            <NavBar />
            <div className="contact-wrap">
                <div className="left-wrap">
                    <div className="black-line"></div>
                    <img src={send_mail} alt=" "></img>
                </div>
                <div className="right-wrap">
                    <form ref={form} onSubmit={sendEmail} className="form-wrap">
                        <label>Name</label>
                        <input type="text" name="user_name" className="single-line"/>
                        <label>Email</label>
                        <input type="email" name="user_email" className="single-line"/>
                        <label className="msg">Message</label>
                        <textarea name="message" className="multi-line"/>
                        <input type="submit" value="Send" className="send-btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;