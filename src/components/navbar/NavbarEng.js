import React, {Component} from 'react';
import  {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Navbar.css';
import {HashLink as Lnk} from 'react-router-hash-link';
import {Link, animateScroll as scroll} from 'react-scroll';
class OurNavbar extends Component {
    render(){
        let liens =(
<Navbar.Collapse className="NavEng" id="basic-navbar-nav">
                    <Nav className="NavbarItemsEng ">
                    <NavLink to="/">Home</NavLink>
                        <Link 
                        activeClass="active"
                        to="aboutSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}

                        >who are we</Link>
                    <Link 
                        activeClass="active"
                        to="omanSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}

                        >Sultanate of Oman the Land of Frankincense</Link>
                    <NavLink to="/en/products">Our Products</NavLink>
                    <NavLink to="/en/contact">Contact Us</NavLink>
                    
                    
                    </Nav>
                    
                </Navbar.Collapse>
        );
        if(this.props.lien){
 liens = (
    <Navbar.Collapse className="NavEng" id="basic-navbar-nav">
    
    <Nav className="NavbarItemsEng ">
    <NavLink to="/">Home</NavLink>
    <Lnk to="/en#aboutSection">who are we</Lnk>
    <Lnk to="/en#omanSection">Sultanate of Oman the Land of Frankincense</Lnk>
    <NavLink to="/en/products">Our Products</NavLink>
    <NavLink to="/en/contact">Contact Us</NavLink>
    </Nav>
    
</Navbar.Collapse>
 );
        }
        return(
            <Navbar  expand="lg" className="d-flex flex-row Navbar ENG">
                <Navbar.Brand href="#home" className="LogoEng">
                    <NavLink to="/en" exact className="LogoLinkEng" ><img src={Logo} alt="Logo Loben Dhofar" /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                {liens}
                </Navbar>
        );
    }
}

export default OurNavbar;