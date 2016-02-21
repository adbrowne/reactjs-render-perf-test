var React = require('react'),
    DOM = React.DOM, div = DOM.div, button = DOM.button, ul = DOM.ul, li = DOM.li

module.exports = React.createClass({
  render: function() {
    var items = [];
    for(i = 0; i < this.props.items; i++){
       items.push(div({ key: i }, "andrew"));
    } 

    return div(null, items); 
  },
})
