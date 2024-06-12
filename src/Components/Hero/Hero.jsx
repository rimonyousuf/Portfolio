import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf';

const Hero = () => {
    return (
        <div id='Home' className='hero'>
            <img className='profile_img' src={profile_img} alt="" />
            <h2><span>I'm Yasir Yousuf Rimon,</span> MERN Stack developer based in Bangladesh.</h2>
            <p>I am a passionate MERN Stack Developer fresh to the field, dedicated to crafting innovative web solutions with MongoDB, Express.js, React.js, and Node.js.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' href='#Contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={resume} download="resume.pdf">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;