import React, {Component} from 'react';
import classes from './OmanSection.module.css';
import {NavLink} from 'react-router-dom';
import BG from '../../assets/images/omanBG.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class OmanSectionEng extends Component {
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
            <div className={classes.About} style={{backgroundImage: "url('"+ BG +"')"}} id="omanSection">
                <div className={classes.Modal}>
                    <div className={classes.ModalMain}
                    // data-aos="flip-left"
                    // data-aos-offset="200"
                    // data-aos-delay="50"
                    >
                        <h2
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        className={classes.TitleEng}
                        >Sultanate of Oman the Land of Frankincense</h2>
                       <p
                       data-aos="fade-in"
                       data-aos-offset="200"
                       data-aos-delay="700"
                       className={classes.ParaEng}>From Oman caravans had set off loaded with frankincense in an arduous journey of 2000 km across the Arabian Desert, headed to the Egyptian, Babylonian and Roman Empires, while the ships loaded with resin sailed towards further lands like China. The Roman savant Pliny the Elder (23-79AD) stated that trade made the southerner Arabs “the richest people on earth”. 
                        </p>
                        <div className={classes.ViewMore}
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="800">
                      <NavLink to="/en/oman">Read More...</NavLink>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OmanSectionEng;