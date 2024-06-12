import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';
import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        if (!email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please enter an email address',
                showConfirmButton: true
            });
            return;
        }

        const templateParams = {
            user_email: email,
        };

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_SERVICE_KEY,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_USER_ID
            );

            if (response.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thanks for your subscribe',
                    showConfirmButton: false,
                    timer: 1500
                });
                setEmail(''); // Clear the input field
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong. Please try again.',
                showConfirmButton: true
            });
        }
    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I am a passionate MERN Stack Developer fresh to the field, dedicated to crafting innovative web solutions with MongoDB, Express.js, React.js, and Node.js.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Yasir Yousuf Rimon. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <a href="https://www.facebook.com/yyrimon" target="_blank"><FaFacebook className='facebook' /></a>
                    <a href="https://www.linkedin.com/in/yasiryousufrimon/" target="_blank"><FaLinkedin className='linkedIn' /></a>
                    <a href="https://github.com/rimonyousuf" target="_blank"><FaGithub className='github' /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;