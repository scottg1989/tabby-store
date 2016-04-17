var React = require("react");
import { Link  } from 'react-router'

require("../stylesheets/modules/product-card.scss");
require("../stylesheets/utilities/clearfix.scss");

var ProductCard = React.createClass({
  render () {
    return (
      <div className="product-card">
          <Link to="/products/12ab">
              <img className="product-card-image" src={this.props.image} />
              <div className="product-card-info">
                  <span className="product-card-name">{this.props.name}</span>
                  <span className="product-card-price">£{this.props.price}</span>
              </div>
          </Link>
      </div>
    );
  }
});

var Products = React.createClass({
  render () {
    return (
      <div className="product-cards u-clearfix">
          <ProductCard name="Green Jersey Dress" price="27" image="http://images.rewardstyle.com/img?v=2.13&p=n_30529472" />
          <ProductCard name="Blue Evening Dress" price="80" image="http://www.mocodresses.com/images/large/201304/one-shoulder-royal-blue-chiffon-floor-length-prom-dress-evening-gown-jo-959013669520371.jpg" />
          <ProductCard name="Girls Cotton Skirt" price="25"  image="http://g03.a.alicdn.com/kf/HTB1SLTPHVXXXXXhXFXXq6xXFXXXp/-font-b-Girls-b-font-font-b-Skirt-b-font-Kids-The-Cowboy-Floral-Cotton.jpg" />
          <ProductCard name="Denim Shorts" price="22" image="http://images.asos-media.com/inv/media/6/6/5/6/4796566/image4xxl.jpg" />
      </div>
    );
  }
});

module.exports = Products;
