import React , {Component} from 'react';
import classes from './Products.module.css';
import Aux from '../../hoc/Auxliary';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import prod1 from '../../assets/images/prod1.png';
import prod2 from '../../assets/images/prod2.png';
import prod3 from '../../assets/images/prod3.png';
import prod4 from '../../assets/images/prod4.png';
import prod5 from '../../assets/images/prod5.png';
import prod6 from '../../assets/images/prod6.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class Products extends Component {
    componentDidMount(){
        Aos.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
        });
    }
    render(){
        return(
            <Aux>
                <Header lien={true} />
                <div className={classes.Products}>
                    <div className={classes.ProductsContent}>
                        <Row>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/1" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}
                                    >
                                        <img src={prod1} alt="Product Image" 
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-delay="50"/>
                                    </div>
                                    <div className={classes.Title} 
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-delay="150"
                                    >
                                       <h2> تونر اللبان الذكر</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/2" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}>
                                        <img src={prod2} alt="Product Image" 
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-delay="350" />
                                    </div>
                                    <div className={classes.Title}
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-delay="450">
                                       <h2> زيت اللبان العطري</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/3" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}>
                                        <img src={prod3} alt="Product Image" 
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-delay="650" />
                                    </div>
                                    <div className={classes.Title}
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-delay="750">
                                       <h2>ماء اللبان المقطر</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/4" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}>
                                        <img src={prod5} alt="Product Image" 
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="50" />
                                    </div>
                                    <div className={classes.Title}
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="100">
                                       <h2>زيت اللبان العماني الكميات التجارية</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/5" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}>
                                        <img src={prod4} alt="Product Image" 
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="250" />
                                    </div>
                                    <div className={classes.Title}
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="100">
                                       <h2> بودرة اللبان العماني</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} md={6} sm={6} className="my-4">
                            <NavLink to="/ar/products/6" exact className={classes.ProductLink}>
                                <div className={classes.Product}>
                                    <div className={classes.Img}>
                                        <img src={prod6} alt="Product Image" 
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="250" />
                                    </div>
                                    <div className={classes.Title}
                                    data-aos="fade-in"
                                    data-aos-offset="100"
                                    data-aos-delay="350">
                                       <h2> ماء اللبان المقطر الكميات التجارية</h2>
                                    </div>
                                </div>
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </Aux>
        );
    }
}

export default Products;