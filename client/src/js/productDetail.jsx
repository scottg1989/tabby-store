var React = require("react");
import { Link  } from 'react-router';

var ProductDetail = React.createClass({
  render () {
    return (
      <div>
          <h1>Green Jersey Dress</h1>
          <h2>£27</h2>
          <img src="http://images.rewardstyle.com/img?v=2.13&p=n_30529472" />
          <div>
            Make a statement with this Stripe Go Crazy Jersey Dress from White Stuff.
            This modern dress is crafted with a graphic print, featuring cap sleeves and ruched detail at the front.
            Pair with flats for modern chic.
            Size 12 measures approx. 98cm high shoulder neck point to hem.
          </div>
          <Link to="/">All Products</Link>
      </div>
    );
  }
});

module.exports = ProductDetail;
