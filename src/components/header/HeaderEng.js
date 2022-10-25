import React , {Component} from 'react';
import classes from './Header.module.css';
import OurNavbarEng from '../navbar/NavbarEng';
class Header extends Component {
    render() {
        return(
           <header className={classes.Header}>
               <OurNavbarEng lien={this.props.lien} />
           </header>
        );
    }
}

export default Header;