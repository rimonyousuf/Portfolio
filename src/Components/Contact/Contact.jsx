import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import Swal from 'sweetalert2';
import { useRef } from 'react';

const Contact = () => {

    const formRef = useRef(null)

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message has been sent successfully",
                showConfirmButton: false,
                timer: 1500
              });
              formRef.current.reset();
        }
    };

    return (
        <div id='Contact' className='contact'>
            <div className="contact-title">
                <h2>Get in touch</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>yasiryousufrimon1@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+8801938969920</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right' ref={formRef}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" />

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name="email" />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your messsage'></textarea>

                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;