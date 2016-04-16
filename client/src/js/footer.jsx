var React = require("react");

require("../stylesheets/modules/footer.scss");
require("../stylesheets/utilities/clearfix.scss");

var Footer = React.createClass({
  render () {
    return (
      <div className="footer u-clearfix">
        Footer
      </div>
    );
  }
});

module.exports = Footer;
