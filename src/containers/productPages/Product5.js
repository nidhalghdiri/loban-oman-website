import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide2.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product5 extends Component {
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
                                <h1>بودرة اللبان العماني </h1>
                                </div>
                                <div className={classes.Para}>
                                <p>
                                بعد عملية تقطير اللبان التي يتم فيها فصل الزيت عن الراتينج نقوم بتجفيف  الراتينج وتعريضه لدرجات حرارة مختلفة  لضمان عدم التعفن ومن ثم نقوم بطحنة وتحويله الى بودرة مشبعة بمكونات طبيعية دون اي مواد حافظة يمكن استخدامها في العديد من مستحضرات التجميل وتعتبر فخر صناعتنا التي انتجناها بتقنية طبيعية .
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

export default Product5;