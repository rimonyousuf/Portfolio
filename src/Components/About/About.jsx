import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h2>About me</h2>
                <img className='title-img' src={theme_pattern} alt="" />
                <div className="about-sections">
                    <div className="about-left">
                        <img className='profile-img' src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Eager to contribute fresh perspectives and enthusiasm to collaborative projects.</p>
                            <p>Continuously learning and adapting to industry trends. Let's connect and explore opportunities to create impactful solutions together!</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>Node JS</p> <hr style={{ width: "50%" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;