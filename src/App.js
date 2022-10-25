import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstPage from './containers/firstPage/FirstPage';
import Home from './containers/home/Home';
import HomeEng from './containers/home/HomeEng';
import Contact from './containers/contact/Contact';
import ContactEng from './containers/contact/ContactEng';
import Products from './containers/products/Products';
import ProductsEng from './containers/products/ProductsEng';
import Product1 from './containers/productPages/Product1';
import Product1Eng from './containers/productPages/Product1Eng';
import Product2 from './containers/productPages/Product2';
import Product2Eng from './containers/productPages/Product2Eng';
import Product3 from './containers/productPages/Product3';
import Product3Eng from './containers/productPages/Product3Eng';
import Product4 from './containers/productPages/Product4';
import Product4Eng from './containers/productPages/Product4Eng';
import Product5 from './containers/productPages/Product5';
import Product5Eng from './containers/productPages/Product5Eng';
import Product6 from './containers/productPages/Product6';
import Product6Eng from './containers/productPages/Product6Eng';
import About from './containers/about/About';
import AboutEng from './containers/about/AboutEng';
import Oman from './containers/oman/Oman';
import OmanEng from './containers/oman/OmanEng';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={FirstPage} />
      <Switch>
        <Route path="/ar" exact component={Home}/>
        <Route path="/en" exact component={HomeEng}/>
        <Route path="/ar/about" exact component={About}/>
        <Route path="/en/about" exact component={AboutEng}/>
        <Route path="/ar/oman" exact component={Oman}/>
        <Route path="/en/oman" exact component={OmanEng}/>
        <Route path="/ar/contact" exact component={Contact}/>
        <Route path="/en/contact" exact component={ContactEng}/>
        <Route path="/ar/products" exact component={Products}/>
        <Route path="/en/products" exact component={ProductsEng}/>
        <Route path="/ar/products/1" exact component={Product1}/>
        <Route path="/en/products/1" exact component={Product1Eng}/>
        <Route path="/ar/products/2" exact component={Product2}/>
        <Route path="/en/products/2" exact component={Product2Eng}/>
        <Route path="/ar/products/3" exact component={Product3}/>
        <Route path="/en/products/3" exact component={Product3Eng}/>
        <Route path="/ar/products/4" exact component={Product4}/>
        <Route path="/en/products/4" exact component={Product4Eng}/>
        <Route path="/ar/products/5" exact component={Product5}/>
        <Route path="/en/products/5" exact component={Product5Eng}/>
        <Route path="/ar/products/6" exact component={Product6}/>
        <Route path="/en/products/6" exact component={Product6Eng}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
