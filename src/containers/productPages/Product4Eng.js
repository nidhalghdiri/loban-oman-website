import React, {Component} from 'react';
import classes from './Product.module.css';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide1.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product4Eng extends Component {
    render(){
        return(
            <Aux>
                <HeaderEng lien={true} />
                    <div className={classes.Product}>
                    <div className={classes.BackBtn}>
                            <NavLink to="/en/products">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.Back} />
                </NavLink>
                        </div>
                        <div className={classes.ProductMain}>
                        <div className={classes.ProductImg}>
                            <img src={prodImg} alt="Product Image" />
                        </div>
                        <div className={classes.ProductContent}>
                            <div className={classes.Title}>
                                <h1>Omani frankincense essential oil commercial quantities</h1>
                                </div>
                                <div className={classes.Para}>
                                <p className={classes.Eng}>
                                It is the most valuable essential oil in the world extracted from the finest Omani frankincense
our method of distilling an omani frankincense is natural and free from any chemical additive
luban Dhofar  has the ability to provide commercial quantities of Frankincense essential oil and ship them to all countries of the world

                              </p>
                            
                                
                                </div>
                                
                            
                        </div>
                        </div>
                    </div>
                <Footer />
            </Aux>
        );
    }
}

export default Product4Eng;