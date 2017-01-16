module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;

    var App = require('./components');

    var ModuleRouter = function () {
        this.routes = (
            <Router>
                <Route name="app" path="app/" handler={App}/>
            </Router>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };

    return new ModuleRouter();
})();