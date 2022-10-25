import React, {Component} from 'react';
import classes from './FirstPage.module.css';
import Logo from '../../assets/images/logo.png';
import Typo from '../../assets/images/firstPageTXT.svg';
import BG from '../../assets/images/firstPageBG.png';
import {NavLink} from 'react-router-dom';
import AR from '../../assets/images/ar.png';
import EN from '../../assets/images/eng.png';
import {Row, Col} from 'react-bootstrap';
class FirstPage extends Component {
    render(){ 
        return(
            <div className={classes.FirstPage} 
                style={{backgroundImage: "url('"+ BG +"')"}}>
                <div className={classes.FirstPageContainer}>
                <div className={classes.FirstPageContent}>
                    <div  className={classes.Logo} >
                        <NavLink to="/ar" exact className={classes.LogoLink}><img src={Logo} alt="Logo Loben Dhofar" /></NavLink>
                    </div>
                    <div className={classes.Typography}>
                        <img src={Typo} alt="Typoghraphy" />
                    </div>
                    <div className={classes.Title}>
                        <h2>تطوير وتسويق منتجات اللبان العماني</h2>
                        <h2 className={classes.TitleEng}>Development and marketing Omani frankincense products</h2>
                    </div>  
                    <div className={classes.Langs}>
                        <Row>
                            <Col lg={6} md={6} sm={6}>
                            <div className={classes.Lang}>
                            <img src={AR} alt="Arabic" />
                            <NavLink to="/ar" exact>العربية</NavLink>
                        </div>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                            <div className={classes.Lang}>
                            <img src={EN} alt="English" />
                            <NavLink to="/en" exact>ENG</NavLink>
                            </div>
                            </Col>
                        </Row>
                        
                        
                    
                    

                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;