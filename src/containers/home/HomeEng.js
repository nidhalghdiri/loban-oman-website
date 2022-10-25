import React, {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import HeaderEng from '../../components/header/HeaderEng';
import OurSlider from '../../components/slider/Slider';
import AboutSectionEng from '../../components/aboutSection/AboutSectionEng';
import Footer from '../../components/footer/Footer';
import OmanSectionEng from '../../components/omanSection/OmanSectionEng';
class Home extends Component {
    render(){
        return(
            <Aux>
                <HeaderEng lien={false} />
                <OurSlider lang="en" />
                <AboutSectionEng />
                <OmanSectionEng />
                <Footer />
            </Aux>
        );
    }
}

export default Home;