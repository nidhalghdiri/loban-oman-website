import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide8.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product6 extends Component {
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
                                <h1>ماء اللبان المقطر الكميات التجارية</h1>
                                </div>
                                <div className={classes.Para}>
                                <p>
                                ماء اللبان المقطر الكميات التجارية 
مستخرج من عصارة اجود أنواع اللبان العماني  عالي الجودة 
يتم استخدامه كمذيب في المستحضرات ، الأحبار والأقنعة والشامبو وغيرها من 
مستحضرات التجميل التي تذوب في الماء
لبان ظفار لديها  القدرة على توفير كميات تجارية لماء اللبان  وشحنها الى أي وجهه في العالم

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

export default Product6;