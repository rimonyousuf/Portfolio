import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img className='profile_img' src={profile_img} alt="" />
            <h2><span>I'm Yasir Yousuf Rimon,</span> MERN Stack developer based in Bangladesh.</h2>
            <p>I am a passionate MERN Stack Developer fresh to the field, dedicated to crafting innovative web solutions with MongoDB, Express.js, React.js, and Node.js.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;