var React = require("react");
var ReactDOM = require('react-dom');
var Header = require("./header.jsx");
var Footer = require("./footer.jsx");
var Products = require("./products.jsx");
var ProductDetail = require("./productDetail.jsx");
import { Router, Route, Link, hashHistory  } from 'react-router'

import 'stylesheets/base'

class BasePage extends React.Component {
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
    );
  }
}

class ProductsPage extends React.Component {
  render() {
    return (
        <BasePage>
          <Products />
        </BasePage>
    );
  }
}

class ProductDetailPage extends React.Component {
  render() {
    return (
        <BasePage>
          <ProductDetail />
        </BasePage>
    );
  }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ProductsPage}/>
        <Route path="/products/:productId" component={ProductDetailPage}/>
    </Router>
), document.getElementById('main'));
