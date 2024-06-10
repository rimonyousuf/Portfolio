import './Navbar.css';
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState('Home')

    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul className="nav-menu">
                <li><p onClick={()=>setMenu("Home")}>Home</p>{menu === 'Home' ? <img src={underline} alt='' /> : <></>}</li>
                <li><p onClick={()=>setMenu("About")}>About Me</p>{menu === 'About' ? <img src={underline} alt='' /> : <></>}</li>
                <li><p onClick={()=>setMenu("Service")}>Services</p>{menu === 'Service' ? <img src={underline} alt='' /> : <></>}</li>
                <li><p onClick={()=>setMenu("Contact")}>Connect</p>{menu === 'Contact' ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    );
};

export default Navbar;