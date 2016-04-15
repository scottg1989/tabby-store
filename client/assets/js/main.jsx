var React = require("react");
var ReactDOM = require('react-dom');
var Header = require("./header.jsx");
var Footer = require("./footer.jsx");

class Page extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(<Page/>, document.getElementById('main'));
