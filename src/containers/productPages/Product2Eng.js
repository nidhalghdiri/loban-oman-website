import React, {Component} from 'react';
import classes from './Product.module.css';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/prodimg2.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product2 extends Component {
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
                        <div className={classes.ProductImg} style={{width: "50%"}}>
                            <img src={prodImg} alt="Product Image" />
                        </div>
                        <div className={classes.ProductContent}>
                            <div className={classes.Title}>
                                <h1>ESSENTIAL FRANKINCENSE OIL</h1>
                                </div>
                                <div className={classes.Para}>
                                <p className={classes.Eng}>
                                Frankincense oil is well-known for being one of the most valuable essential oils, it has exceptional health benefits. The essential frankincense oil was used thousands of years ago in various fields like medicine and manufacture of cosmetics.
                                </p>
                                <p className={classes.Eng}>
                                We slowly distillate the essential frankincense oil from the resin of frankincense trees (Boswellia sacra) using a natural, chemical additive free method.
                                </p>
                                <p className={classes.Eng}> 
                                Frankincense essential oil infuses with deep warmth, delicate sweet balsamic and ancient earthy notes, and when diffused it adds serenity, grounding and reflection.
                                </p>
                                <p className={classes.Eng}>
                                Its soothing and beautifying properties are used to beautify and rejuvenate skin and help reduce the appearance of blemishes when it is applied topically. It is known that frankincense supports the cellular functions, immunity, nervous, and digestive systems when taken internally.      
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

export default Product2;