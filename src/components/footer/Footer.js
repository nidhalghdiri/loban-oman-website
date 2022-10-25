import React , {Component} from 'react';
import './Footer.css';
import { Row, Col} from 'react-bootstrap';
import twit from '../../assets/images/twitter.svg';
import fb from '../../assets/images/facebook.svg';
import insta from '../../assets/images/instagram.svg';
import yout from '../../assets/images/youtube.svg';
import QRCode from '../../assets/images/code.svg';
class Footer extends Component{
    render(){
        return(
            <footer className="Footer"> 
                <Row>
                    <Col lg={{span: 2, order: 1}} md={{span: 12, order: 3}} sm={{span: 12, order: 5}} >
                        <div className="SocialMediaMain">
                            <Row>
                                <Col lg={3} md={3} sm={3} className="SocialMediaIcon col-3">
                                    <a href="https://twitter.com/lubandhofar100" target="_blank" rel="noopener noreferrer"><img src={twit} alt="twitter" /></a>
                                </Col>
                                <Col lg={3} md={3} sm={3} className="SocialMediaIcon col-3">
                                    <a href="https://www.facebook.com/lubandhofar100/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
                                </Col>
                                <Col lg={3} md={3} sm={3} className="SocialMediaIcon col-3">
                                    <a href="https://www.instagram.com/lubandhofar100/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" /></a>
                                </Col>
                                <Col lg={3} md={3} sm={3} className="SocialMediaIcon col-3">
                                    <a href="https://www.youtube.com/channel/UCnjSYBIs5ZXCJ1PUFcPBWzQ" target="_blank" rel="noopener noreferrer"    ><img src={yout} alt="youtube" /></a>
                                </Col>
                            </Row>
                            <div className="SocialMediaTxt">
                                <span>lubandhofar100</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span: 2, order: 2}} md={{span: 6, order: 1}} sm={{span: 6, order: 4}} >
                        <div className="ContactMain">
                            
                            <div className="Phone">
                                <span>+968-72711007</span>
                            </div>
                            <div className="Phone">
                                <span>+968-99490806</span>
                            </div>
                            <div className="Phone">
                                <span>+968-99455575</span>
                            </div>
                            <div className="Phone">
                                <span>+968-99296019</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span: 2, order: 3}} md={{span: 6, order: 2}} sm={{span: 6, order: 2}} >
                        <div className="ContactMain">
                            <div className="Email">
                            <span>PO.BOX: 2821 | PC: 211</span>
                            </div>
                            <div className="Email">
                                <span>lubandhofar100@gmail.com</span>
                            </div>
                           
                            
                        </div>
                    </Col>
                    <Col lg={{span: 2, order: 4}} md={{span: 6, order: 2}} sm={{span: 6, order: 3}} >
                        <div className="ContactMain">
                        <div className="Email">
                            <span>Salalah - Sultanate of Oman</span>
                            </div>
                            <div className="Phone">
                            <span>صلالة – سلطنة عمان</span>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg={{span: 3, order: 5}} md={{span: 12, order: 4}} sm={{span: 6, order: 1}} >
                    <div className="ContactMain">
                    <div className="Email">
                            <span>Luban Dhofar Frankincense distillation L.L.C</span>
                            </div>
                            <div className="Phone">
                            <span>لبان ظفار لتقطير اللبان ش م م</span>
                            </div>
                    
                    </div>
                    </Col>
                    <Col lg={{span: 1, order: 6}} md={{span: 12, order: 4}} >
                        <div className="QRCode">
                            <img src={QRCode} alt="QRCode" />
                        </div>
                    </Col>
                </Row>
                <div className="Dev">
                    <span>© 2020 - </span>
                    <a href="http://www.nidhalghdiri.tn" target="_blank" rel="noopener noreferrer" >Nidhal Ghdiri</a>
                </div>
            </footer>
        );
    }
}

export default Footer;