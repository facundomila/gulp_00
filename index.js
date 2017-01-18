var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;

//TODO: add database

var App = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li>Homssse</li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        );
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route name="home" path="/home" component={Home}/>
            <Route name="about" path="/about" component={About}/>
            <Route name="contact" path="/contact" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('container'));


