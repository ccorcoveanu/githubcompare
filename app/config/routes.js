var React       = require('react');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

/* Components */
var Main = require('../components/Main');
var Home = require('../components/Home');

/* Containers */
var PromptContainer = require('../containers/PromptContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header='Player one' component={PromptContainer} />
            <Route path="playerTwo/:playerOne" header='Player two' component={PromptContainer} />
        </Route>
    </Router>
);

module.exports = routes;