var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

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
    render: function() {
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

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route name="home" path="/home" component={Home}/>
            <Route name="about" path="about/" handler={About}/>
            <Route name="contact" path="contact/" handler={Contact}/>
        </Route>
    </Router>
), document.getElementById('container'));


