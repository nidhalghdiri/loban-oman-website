import React , {Component} from 'react';
import classes from './Header.module.css';
import OurNavbar from '../navbar/Navbar';
class Header extends Component {
    render() {
        return(
           <header className={classes.Header}>
               <OurNavbar lien={this.props.lien} />
           </header>
        );
    }
}

export default Header;