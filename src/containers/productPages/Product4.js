import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide1.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product4 extends Component {
    render(){
        return(
            <Aux>
                <Header lien={true} />
                    <div className={classes.Product}>
                    <div className={classes.BackBtn}>
                            <NavLink to="/ar/products">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className={classes.Back} />
                </NavLink>
                        </div>
                        <div className={classes.ProductMain}>
                        <div className={classes.ProductImg}>
                            <img src={prodImg} alt="Product Image" />
                        </div>
                        <div className={classes.ProductContent}>
                            <div className={classes.Title}>
                                <h1>زيت اللبان العماني الكميات التجارية</h1>
                                </div>
                                <div className={classes.Para}>
                        
                                <p>
                                إنه الزيت العطري الأكثر قيمة في العالم و المستخلص من اجود أنواع اللبان العماني 
طريقتنا في تقطير اللبان طبيعية وخالية من أي مضافات كيميائية
تمتلك لبان ظفار القدرة على توفير كميات تجارية من زيت اللبان العطري وشحنها الى كافة دول العالم 
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

export default Product4;