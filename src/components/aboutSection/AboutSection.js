import React, {Component} from 'react';
import classes from './AboutSection.module.css';
import BG from '../../assets/images/aboutBG.png';
import {NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
class AboutSection extends Component {
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
        // const settings = {
        //     dots: true,
        //     fade: true,
        //     infinite: true,
        //     speed: 500,
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        //     cssEase: "linear",
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   };
        return(
            <div className={classes.About} style={{backgroundImage: "url('"+ BG +"')"}} id="aboutSection">
                <div className={classes.Modal}>
                    <div className={classes.ModalMain} 
                    data-aos="flip-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    >
                    <div>
                    <h2
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        >من نحن</h2>

                       <p 
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="700"
                      >
                       لبان ظفار لتقطير اللبان ش.م.م شركة عمانية ذات خبرة عريقة في تطوير وتسويق منتجات شجرة اللبان الطبيعية التي تنمو في أودية الجزء الجنوبي من سلطنة عمان وتحديدا في محافظة ظفار ...

                       </p>
                       <div className={classes.ViewMore}>
                      <NavLink to="/ar/about">...إقرأ المزيد</NavLink>
                      </div>
                    </div>
                    <div>
                    <h2
                       data-aos="zoom-in"
                       data-aos-delay="900"
                       >رسالتنا</h2>
                       <p
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="1100"
                       
                       >
                       نشر منتجات اللبان العماني للعالم اجمع لفوائده السحرية التي تعود لألاف السنين ، بالإضافة إلى الابتكارات المتعلقة بالصحة منذ أن أثبت فعاليته طبياً ...
                       </p>
                       <div className={classes.ViewMore}>
                      <NavLink to="/ar/about">...إقرأ المزيد</NavLink>
                      </div>
                    </div>
                     
                      
                      
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;