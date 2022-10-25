import React, {Component} from 'react';
import classes from './AboutSection.module.css';
import {NavLink} from 'react-router-dom';
import BG from '../../assets/images/aboutBG.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class AboutSectionEng extends Component {
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
                       className={classes.TitleEng} >who are we</h2>

                       <p 
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="700"
                       className={classes.ParaEng}
                      >
                          Luban Dhofar Frankincense Distillation LLC is an Omani company with profound experience in development and marketing of natural products of frankincense tree that grows in the southern part of the sultanate of Oman namely the Governorate of Dhofar...
                 
                </p>
                <div className={classes.ViewMore}
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="800">
                      <NavLink to="/en/about">Read More...</NavLink>
                      </div>
                        </div>
                       <div>
                       <h2
                       data-aos="zoom-in"
                       data-aos-delay="900"
                       className={classes.TitleEng}
                       >Our Mission</h2>
                       <p
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="1100"
                       className={classes.ParaEng}
                       >Spreading Omani frankincense products to the whole world for its magical benefits which date back to thousands of years...  
                       </p>
                       <div className={classes.ViewMore}
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-delay="1200">
                      <NavLink to="/en/about">Read More...</NavLink>
                      </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSectionEng;