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
<Navbar.Collapse className="Nav" id="basic-navbar-nav" >
                    <Nav className="NavbarItems ">
                    <NavLink to="/">الرئيسية</NavLink>
                        <Link 
                        activeClass="active"
                        to="aboutSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}

                        >من نحن</Link>
                    <Link 
                        activeClass="active"
                        to="omanSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}

                        >سلطنة عمان ارض اللبان</Link>
                    <NavLink to="/ar/products">منتجتنا</NavLink>
                    <NavLink to="/ar/contact">التواصل</NavLink>
                    
                    
                    </Nav>
                    
                </Navbar.Collapse>
        );
        if(this.props.lien){
 liens = (
    <Navbar.Collapse className="Nav" id="basic-navbar-nav">
    
    <Nav className="NavbarItems ">
    <NavLink to="/">الرئيسية</NavLink>
    <Lnk to="/ar#aboutSection">من نحن</Lnk>
    <Lnk to="/ar#omanSection">سلطنة عمان ارض اللبان</Lnk>
    <NavLink to="/ar/products">منتجتنا</NavLink>
    <NavLink to="/ar/contact">التواصل</NavLink>
    </Nav>
    
</Navbar.Collapse>
 );
        }
        return(
            <Navbar  expand="lg" className="d-flex flex-row-reverse Navbar">
                <Navbar.Brand href="#home" className="Logo">
                    <NavLink to="/ar" exact className="LogoLink" ><img src={Logo} alt="Logo Loben Dhofar" /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                {liens}
                </Navbar>
        );
    }
}

export default OurNavbar;