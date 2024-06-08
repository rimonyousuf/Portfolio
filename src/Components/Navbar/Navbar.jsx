import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Connect</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    );
};

export default Navbar;