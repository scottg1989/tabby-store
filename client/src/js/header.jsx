var React = require("react");

require("../stylesheets/modules/header.scss");
require("../stylesheets/modules/logo.scss");
require("../stylesheets/modules/basket-button.scss");

var Logo = React.createClass({
    render () {
        return (
            <span className="logo-container">
                <span className="logo-main">Tabitha</span>
                <span className="logo-sub">Handmade clothes</span>
            </span>
        );
    }
});

var BasketButton = React.createClass({
    render () {
        return (
            <button className="basket-button">
                <span className="fa fa-shopping-basket" aria-hidden="true"></span>
            </button>
        );
    }
});

var Header = React.createClass({
  render () {
    return (
      <div className="header">
        <Logo />
        <BasketButton />
      </div>
    );
  }
});

module.exports = Header;
