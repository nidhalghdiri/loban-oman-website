import React, {Component} from 'react';
import classes from './Product.module.css';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide2.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product5Eng extends Component {
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
                                <h1>Omani Frankincense Powder </h1>
                                </div>
                                <div className={classes.Para}>
                                <p className={classes.Eng}>
                                After the distillation process where oil is separated from resin we dry the resin and expose it to a different degree of temperature to ensure that there is no rotting, and then we grind it and convert it into a powder saturated with natural ingredients without any preservatives that can be used in many cosmetic products. It is the pride of our industry that we produced with natural technology. 
                                </p>
                                {/* <p className={classes.Eng}>
                                This product as well as the details has not been evaluated by the Food & Drug Administration. This product and this website are not intended to diagnose, cure or prevent any disease.   
                                </p> */}
                               
                                
                                </div>
                                
                            
                        </div>
                        </div>
                    </div>
                <Footer />
            </Aux>
        );
    }
}

export default Product5Eng;