var React = require("react");

require("../stylesheets/modules/product-card.scss");
require("../stylesheets/utilities/clearfix.scss");

var ProductCard = React.createClass({
  render () {
    return (
      <div className="product-card">
          <img className="product-card-image" src="http://images.rewardstyle.com/img?v=2.13&p=n_30529472" />
          <div className="product-card-info">
              <span className="product-card-name">Green Jersey Dress</span>
              <span className="product-card-price">£27</span>
          </div>
      </div>
    );
  }
});

var Products = React.createClass({
  render () {
    return (
      <div className="product-cards u-clearfix">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
    );
  }
});

module.exports = Products;
