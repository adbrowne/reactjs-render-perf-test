var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;

console.log(process.env);
var itemCount = process.argv[2];
var iterations = 100;

var App = React.createFactory(React.createClass({
  render: function() {
    var items = [];
    for(i = 0; i < this.props.items; i++){
       items.push(div({ key: i }, "andrew"));
    } 

    return div(null, items); 
  },
}));

var renderApp = function(itemCount) {
    var startTime = null;
    for(iterator = 0; iterator < iterations + 10; iterator++){
        if(iterator === 10) {
            // start recording after 10 items. to allow for some warmup
            startTime = new Date();
        } 
        var props = { items: itemCount } 
        var result = ReactDOMServer.renderToString(App(props));
    }
    var endTime = new Date();
    var elapsed = endTime - startTime;
    console.log((elapsed / iterations) + "ms");
}

renderApp(itemCount);
