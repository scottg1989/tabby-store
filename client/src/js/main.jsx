var React = require("react");
var ReactDOM = require('react-dom');
var Header = require("./header.jsx");
var Footer = require("./footer.jsx");
var Products = require("./products.jsx");

import 'stylesheets/base'

class Page extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Products />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(<Page/>, document.getElementById('main'));
