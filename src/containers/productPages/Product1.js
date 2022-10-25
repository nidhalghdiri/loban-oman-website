import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aux from '../../hoc/Auxliary';
import prodImg from '../../assets/images/slide4.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom';
class Product1 extends Component {
    render(){
        return(
            <Aux>
                <Header lien={true} />
                    <div className={classes.Product}>
                        <div className={classes.BackBtn} >
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
                                <h1>تونر اللبان الذكر</h1>
                                </div>
                                <div className={classes.Para}>
                                <p>
                                منتج نقي وعضوي مستخلص بطريقة طبيعية من اللبان الذكر العماني بدون أي إضافات كيميائية  ، يستخدم موضوعيا على البشرة له فوائد عديده  يُقوّي ويُعزّز البشرة ويُوحّد لونها.
                                </p>
                                <p>
                                يساعد في علاج اضطرابات البشرة: مثل الأكزيما، والالتهابات الفطريّة. يُؤخّر شيخوخة البشرة: عن طريق تعزيز إنتاج الكولاجين فيها، بالإضافة لتجديد خلايا الجلد.
                                </p>
                                <p>
                                يحافظ على البشرة مشدودة وناعمة وصحيّة: حيث أنّ تونر اللبان الذّكر غنيّ بمضادات الأكسدة، ومضادات الالتهابات .
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

export default Product1;