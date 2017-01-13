var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var Lalala = require('./temp/lalala');

/*var Home = require('./src/views/home');
var AppRouter = require('./router');*/

//TODO: add database

var App = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to="home">Homssse</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
});
module.exports = App;

var Home = React.createClass({
    render: function() {
        console.log('kajgsdfajd');
        return (
            <div>
                <h1>Home...</h1>
            </div>
        );
    }
});
module.exports = Home;

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        );
    }
});
module.exports = About;

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        );
    }
});
module.exports = Contact;

var AppRouter = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="home" component={Lalala} />
                    <Route path="about.html" component={About} />
                    <Route path="contact" component={Contact} />
                </Route>
            </Router>
        );
    }
});
module.exports = AppRouter;

ReactDOM.render(<AppRouter />, document.getElementById('container'));


