import React, {Component} from 'react';
import classes from './Product.module.css';
import Header from '../../components/header/Header';
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
                                <h1>زيت اللبان العطري</h1>
                                </div>
                                <div className={classes.Para}>
                                <p>
                                يشتهر زيت اللبان بكونه أحد أثمن الزيوت العطرية ،وله فوائد صحية استثنائية وقد أستخدم زيت اللبان العطري منذ آلاف السنين في مجالات متعددة منها الطبية وصناعة مواد التجميل 
                                </p>
                                <p>
                                حيث نقوم بتقطير زيت اللبان العطري ببطء من راتنجات أشجار اللبان ( بوسويليا ساكارا ) بطريقه طبيعية خالية من أي إضافات كيميائية .
                                </p>
                                <p> 
                                    ينضح زيت اللبان العطري بالدفء العميق والنوتات الحلوة الرفيعة والبلسمية والترابية القديمة وعندما تنتشر فإنها تضيف الصفاء والتأريض والانعكاس.
                                </p>
                                <p>
                                تستخدم خصائصه المهدئة والتجميلية لتجديد شباب البشرة والمساعدة في تقليل ظهور العيوب عند استخدامه موضعياً ومن المعروف أن اللبان يدعم الوظائف الخلوية والجهاز المناعي والعصبي والجهاز الهضمي عند استخدامه داخليًا.
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