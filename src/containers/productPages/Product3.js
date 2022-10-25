import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/prodimg.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product3 extends Component {
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
                        <div className={classes.ProductImg} style={{width: "50%"}}>
                            <img src={prodImg} alt="Product Image" />
                        </div>
                        <div className={classes.ProductContent}>
                            <div className={classes.Title}>
                                <h1>ماء اللبان المقطر</h1>
                                </div>
                                <div className={classes.Para}>
                                <p>
                                خلال عملية تقطير اللبان في مصنعنا والتي تمر بعدة مراحل علمية حديثة تهدف الى استخلاص عُصارة اللبان العماني عالي الجودة والمختار بعناية فائقة ينتج عنها محلول مائي عضوي له رائحة منعشة راتنجية وحلوة مع نغمات خشبية. وخصائصه الداعمة للبشرة تجعله المفضل في تركيبات العناية بالبشرة والتأمل ، وعمل الطاقة ، وخلطات العطور ، ومستحضرات التجميل ،  و العديد من الاستخدامات الصحية الأخرى 
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

export default Product3;