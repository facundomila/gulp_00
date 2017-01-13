var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;
var Route = Router.Route;
var Link = Router.Link;

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "about" component = {About} />
            <Route path = "contact" component = {Contact} />
        </Route>
    </Router>

), document.getElementById('app'));
