import React, {Component} from 'react';
import classes from './Product.module.css';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/prodimg.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product3Eng extends Component {
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
                                <h1>ORGANIC FRANKINCENSE HYDROSOL</h1>
                                </div>
                                <div className={classes.Para}>
                                <p className={classes.Eng}>
                                The process of distilling frankincense in our factory goes through several modern scientific stages, aiming to extract high quality Omani frankincense extract, carefully selected resulting in an organic aqueous hydrosol that has a refreshing resinous and sweet small with woody tones. Its skin supporting properties make it the a favorite in skincare and meditation formulas, energy work, fragrance blends, cosmetics and many other health uses.
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

export default Product3Eng;