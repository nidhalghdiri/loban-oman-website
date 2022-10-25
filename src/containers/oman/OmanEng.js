import React , {Component} from 'react';
// import {Form, Button} from 'react-bootstrap';
import classes from './Oman.module.css';
import Aux from '../../hoc/Auxliary';
import HeaderEng from '../../components/header/HeaderEng';
import Footer from '../../components/footer/Footer';

class OmanEng extends Component{
    render(){
        return(
           <Aux>
               <HeaderEng lien={true} />
               <div className={classes.AboutMain} >
                   <div className={classes.AboutTitle}>
                       <h1>SULTANATE OF OMAN THE LAND OF FRANKINCENSE</h1>
                   </div>
                   <div className={classes.AboutContentEng}>
                       <p>
                       From Oman caravans had set off loaded with frankincense in an arduous journey of 2000 km across the Arabian Desert, headed to the Egyptian, Babylonian and Roman Empires, while the ships loaded with resin sailed towards further lands like China. The Roman savant Pliny the Elder (23-79AD) stated that trade made the southerner Arabs “the richest people on earth”.
There is one type of frankincense trees in Oman; its scientific name is (Boswellia sacra flueck). The frankincense trees belong to a species called (Boswellia) that has 25 types of frankincense trees of which 4 different types only produce frankincense substance which is the Omani type, another type in India and the other two types are in the African Horn region. Of course, these types differ in the shape of trees and their leaves as well.
Studies have proven that the Omani type of frankincense trees is superior to the other types in terms of the quantity of effective biological substance contained therein and its effect on many infections particularly those related to the immune system.
Medically, the Omani frankincense resin was used to cure almost every disease imaginable by the Greek and Roman physicians. Treatment using the Omani frankincense appears in the Syriac book of medicines, the texts of medieval Muslim practitioners and in the Indian and Chinese medicine writers.
                         </p>
                   </div>
               
            
               </div>
                <Footer />
           </Aux> 
        );
    }
}

export default OmanEng;
