var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;
var Route = Router.Route;
var Link = Router.Link;

/*var Home = require('./src/views/home');
var AppRouter = require('./router');*/

//TODO: add database

var App = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li>Homssse</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
});

module.exports = App;

var Home = React.createClass({
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        );
    }
});

module.exports = Home;

var About = React.createClass({
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        );
    }
});

module.exports = About;

var Contact = React.createClass({
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        );
    }
});

module.exports = Contact;

var AppRouter = React.createClass({
    render() {
        return (
            <Router history = {browserHistory}>
                <Route path = "/" component = {App}>
                    <IndexRoute component = {Home} />
                    <Route path = "/home.html" component = {Home} />
                    <Route path = "/about.html" component = {About} />
                    <Route path = "/contact.html" component = {Contact} />
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(<AppRouter />, document.getElementById('container'));


