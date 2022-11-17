import './header.scss'
import Logo from '../img/logo.svg';
import Btn from '../btn/btn';
import{AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Header = () => {
const [nav, setNav] = useState(false);
return(
    <header className="header">
            <div className="HeaderContainer">
            <Link to="/" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={50} duration={500} className="MenuLink" style={{zIndex:"11"}}><img style={{height: '30px', marginRight: "45px"}} src={Logo}/></Link>
                <div className={nav? 'menu active':'menu'}>  
                    <div className="HeaderLeft">    
                        <ul className="MenuList">
                            <li><Link to="Product" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="MenuLink">Product</Link></li>
                            <li><Link to="Use Cases" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="MenuLink">Use Cases</Link></li>
                            <li><Link to="Developers" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="MenuLink">Developers</Link></li>
                            <li><Link to="Pricing" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="MenuLink">Pricing</Link></li>
                            <li><Link to="About" onClick={()=> setNav(!nav)} spy={true} smooth={true} offset={-70} duration={500} className="MenuLink">About</Link></li>  
                        </ul>      
                    </div>
                    <div className="HeaderRight">
                        <a className="MenuLink">Login</a>
                        <Btn cls={"button button__white button__small"} text="Get API Keys"/>
                    </div>              
                </div>
                <div onClick={()=> setNav(!nav)} className='mobileBtn'>
                    {nav? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}     
                </div>  
            </div>
        </header>
)
}

export default Header;
// 