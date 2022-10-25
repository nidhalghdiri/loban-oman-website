import React , {Component} from 'react';
// import {Form, Button} from 'react-bootstrap';
import classes from './About.module.css';
import Aux from '../../hoc/Auxliary';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';

class AboutEng extends Component{
    render(){
        return(
           <Aux>
               <HeaderEng lien={true} />
               <div className={classes.AboutMain} >
                   <div className={classes.AboutTitle}>
                       <h1>who are we</h1>
                   </div>
                   <div className={classes.AboutContentEng}>
                       <p>
                       Luban Dhofar Frankincense Distillation LLC is an Omani company with profound experience in development and marketing of natural products of frankincense tree that grows in the southern part of the sultanate of Oman namely the Governorate of Dhofar.
                        The company has its main office in Salalah close to the frankincense harvest areas, where our own frankincense resins are selected in cooperation with local craftsmen who collect the frankincense manually from natural sites.
                        Our deep-rooted experience in extracting natural frankincense by-products based on well experienced team in distillation of frankincense to get essential frankincense oil, frankincense water hydrosol and resulting frankincense resin powder after distillation. We also develop natural frankincense products and include it in many cosmetic products for different uses.

                        Our Mission
                        Spreading Omani frankincense products to the whole world for its magical benefits which date back to thousands of years. In addition to the health related innovations which are clinically proven effective. The Dhofar frankincense team deals with the local community in the way of selecting high quality frankincense crop collected by traditional methods that do not expose frankincense trees to over-harvesting that affects the natural frankincense trees environment. We also distill frankincense using traditional methods, utilizing our scientific expertise to develop the process of extracting the natural ingredients of frankincense.


                       </p>
                   </div>
                   <div className={classes.AboutTitle}>
                       <h1>Our Mission</h1>
                   </div>
                   <div className={classes.AboutContentEng}>
                       <p>Spreading Omani frankincense products to the whole world for its magical benefits which date back to thousands of years. In addition to the health related innovations which are clinically proven effective. The  Dhofar frankincense team deals with the local community in the way of selecting high quality frankincense crop collected by traditional methods that do not expose frankincense trees to over-harvesting that affects the natural frankincense trees environment. We also distill frankincense using traditional methods, utilizing our scientific expertise to develop the process of extracting the natural ingredients of frankincense. </p>
                   </div>
            
               </div>
                <Footer />
           </Aux> 
        );
    }
}

export default AboutEng;
