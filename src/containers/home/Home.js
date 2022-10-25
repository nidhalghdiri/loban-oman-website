import React, {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import Header from '../../components/header/Header';
import OurSlider from '../../components/slider/Slider';
import AboutSection from '../../components/aboutSection/AboutSection';
import Footer from '../../components/footer/Footer';
import OmanSection from '../../components/omanSection/OmanSection';
class Home extends Component {
    render(){
        return(
            <Aux>
                
                <Header lien={false} />
                <OurSlider lang="ar" />
                <AboutSection />
                <OmanSection />
                <Footer />
                
            </Aux>
        );
    }
}

export default Home;