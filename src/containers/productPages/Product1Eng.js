import React, {Component} from 'react';
import classes from './Product.module.css';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide4.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product1Eng extends Component {
    render(){
        return(
            <Aux>
                <HeaderEng lien={true} />
                    <div className={classes.Product}>
                        <div className={classes.BackBtn} >
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
                                <h1>Male Frankincense Toner</h1>
                                </div>
                                <div className={classes.Para}>
                                <p className={classes.Eng}>A pure organic product extracted from the natural Omani male frankincense without any chemical additives. It is applied on skin, it has numerous benefits. It strengthens and enhances skin and unifies its color. It helps in treating skin disorder like eczema, fungal infections. It delays skin aging by promoting collagen production in it. It also regenerates skin cells. It keeps the skin tight, smooth and healthy, as male frankincense tonic is rich in antioxidants and anti-inflammatory.            </p>
                               
                                
                                </div>
                                
                            
                        </div>
                        </div>
                    </div>
                <Footer />
            </Aux>
        );
    }
}

export default Product1Eng;