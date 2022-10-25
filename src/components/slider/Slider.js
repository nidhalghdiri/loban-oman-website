import React , {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import Slide4 from '../../assets/images/slide4.jpg';
// import Slide5 from '../../assets/images/slide5.jpg';
import Slide6 from '../../assets/images/slide6.jpg';
// import Slide7 from '../../assets/images/slide7.jpg';
import Slide6en from '../../assets/images/slide6eng.jpg';
import Slide3en from '../../assets/images/slide3eng.jpg';
import Slide8 from '../../assets/images/slide8.jpg';
import Slide8eng from '../../assets/images/slide8eng.jpg';
// import Slide6 from '../../assets/images/slide6.png';
import classes from './Slider.module.css';

class OurSlider extends Component{

    render(){
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          let slid = (
<Slider {...settings} className={classes.Slider}>
          <div>
            <img src={Slide1} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide2} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide3} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide4} alt="Slide Image" />
          </div>
          {/* <div>
            <img src={Slide5} alt="Slide Image" />
          </div> */}
          <div>
            <img src={Slide6} alt="Slide Image" />
          </div>
          {/* <div>
            <img src={Slide7} alt="Slide Image" />
          </div> */}
          <div>
            <img src={Slide8} alt="Slide Image" />
          </div>
          {/* <div>
            <img src={Slide6} alt="Slide Image" />
          </div> */}
        </Slider>
          );
          if(this.props.lang === "en"){
            slid = (
              <Slider {...settings} className={classes.Slider}>
          <div>
            <img src={Slide1} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide2} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide3en} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide4} alt="Slide Image" />
          </div>
          {/* <div>
            <img src={Slide5} alt="Slide Image" />
          </div> */}
          <div>
            <img src={Slide6en} alt="Slide Image" />
          </div>
          <div>
            <img src={Slide8eng} alt="Slide Image" />
          </div>
          {/* <div>
            <img src={Slide6} alt="Slide Image" />
          </div> */}
        </Slider>
            );
          }
        return (
            <Aux>
                {slid}
            </Aux>
        );
    }
}
export default OurSlider;