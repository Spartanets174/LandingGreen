import Logo from '../img/logo.svg';
import './footer.scss';
import Btn from '../btn/btn';
import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Footer = () => {
    const [active, setActive] = useState(true);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);
    const [active4, setActive4] = useState(true);
    const [nav, setNav] = useState(false);
return(
    <footer className="footer" id='About'>
            <div className="FooterContainer">
                <div className="FooterTop">
                    <img style={{height: '30px'}} src={Logo}/>
                    <div>
                        <a className="FooterTopRight">
                            Login
                        </a>
                        <Btn cls={"button button__green button__small"} text="Get API Keys"/>
                    </div>
                </div>
                <div className="FooterMiddle">
                    <div className='footerComponent'>
                        <div className='title'> 
                            <h2 className='footerH2'>Product</h2>
                            <i style={active ? {display: "block"} : {display: "none"}} className='fa-solid fa-plus' onClick={() => setActive(!active)}></i>
                            <i style={active ? {display: "none"} : {display: "block"}} className='fa-solid fa-minus ' onClick={() => setActive(!active)}></i>
                        </div>
                        <ul style={active ? {display: "none"} : {display: "block"}}> 
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Emission Calculations</Link></li>
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Diverse Offset Portfolio</Link></li>
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Matching the Offset</Link></li>
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Transparent Reporting</Link></li>
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Flexible API Integration</Link></li>
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Verified Carbon Offsets</Link></li>
                        </ul>
                    </div>
                    <div className='footerComponent'>
                        <div className='title'> 
                            <h2 className='footerH2'>Use cases</h2>
                            <i style={active1 ? {display: "block"} : {display: "none"}} className='fa-solid fa-plus' onClick={() => setActive1(!active1)}></i>
                            <i style={active1 ? {display: "none"} : {display: "block"}} className='fa-solid fa-minus ' onClick={() => setActive1(!active1)}></i>
                        </div>
                        <ul style={active1 ? {display: "none"} : {display: "block"}}>                           
                            <li><Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Ecommerce</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Rideshare</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Flights</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Enterprise Resource Planning</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Energy</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Supply Chain</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Fintech</Link></li>
                            <li> <Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Fleet</Link></li>
                        </ul>
                    </div>
                    <div className='footerComponent'>
                        <div className='title'> 
                            <h2 className='footerH2'>Developers</h2>
                            <i style={active2 ? {display: "block"} : {display: "none"}} className='fa-solid fa-plus' onClick={() => setActive2(!active2)}></i>
                            <i style={active2 ? {display: "none"} : {display: "block"}} className='fa-solid fa-minus ' onClick={() => setActive2(!active2)}></i>
                        </div>
                        <ul style={active2 ? {display: "none"} : {display: "block"}}>                          
                            <li> <Link to="Developers" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">API Docs</Link></li>
                            <li> <Link to="Developers" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Ask Cloverly</Link></li>
                        </ul>
                    </div>
                    <div className='footerComponent'>
                        <div className='title'> 
                            <h2 className='footerH2'>About</h2>
                            <i style={active3 ? {display: "block"} : {display: "none"}} className='fa-solid fa-plus' onClick={() => setActive3(!active3)}></i>
                            <i style={active3 ? {display: "none"} : {display: "block"}} className='fa-solid fa-minus ' onClick={() => setActive3(!active3)}></i>
                        </div>
                        <ul style={active3 ? {display: "none"} : {display: "block"}}>   
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">How It Works</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Offset Projects</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Partners</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">About Us</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Blog</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">News & Press</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='footerComponent'>
                        <div className='title'> 
                            <h2 className='footerH2'>Information</h2>
                            <i style={active4 ? {display: "block"} : {display: "none"}} className='fa-solid fa-plus' onClick={() => setActive4(!active4)}></i>
                            <i style={active4 ? {display: "none"} : {display: "block"}} className='fa-solid fa-minus ' onClick={() => setActive4(!active4)}></i>
                        </div>
                        <ul style={active4 ? {display: "none"} : {display: "block"}}>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">FAQ</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Careers</Link></li>
                            <li><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Terms of Service</Link></li>
                            <li ><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="footerA">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <p>© 2020 Cloverly</p>
            </div>
        </footer>
)
}

export default Footer;