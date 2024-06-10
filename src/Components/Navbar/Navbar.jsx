import './Navbar.css';
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const [menu, setMenu] = useState('Home')

    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#Home'><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink>{menu === 'Home' ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={()=>setMenu("About")}>About Me</p></AnchorLink>{menu === 'About' ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p onClick={()=>setMenu("Service")}>Services</p></AnchorLink>{menu === 'Service' ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Connect</p></AnchorLink>{menu === 'Contact' ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' href='#Contact'>Connect With Me</AnchorLink></div>
        </div>
    );
};

export default Navbar;