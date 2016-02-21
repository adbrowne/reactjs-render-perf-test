var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script,
    App = React.createFactory(require('./App'));

var itemCount = process.argv[2];
var iterations = 100;
var renderPage = function(itemCount) {
    var startTime = null;
    for(iterator = 0; iterator < iterations + 10; iterator++){
        if(iterator === 10) {
            // start recording after 10 items. to allow for some warmup
            console.log(result);
            console.log(result.length);
            startTime = new Date();
        } 
        var props = { items: itemCount } 
        var result = ReactDOMServer.renderToString(App(props));
    }
    var endTime = new Date();
    var elapsed = endTime - startTime;
    console.log(elapsed / iterations);
}

renderPage(itemCount);
