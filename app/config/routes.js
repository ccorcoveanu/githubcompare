import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* Components */
import Main from '../components/Main';
import Home from '../components/Home';

/* Containers */
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header='Player one' component={PromptContainer} />
            <Route path="playerTwo/:playerOne" header='Player two' component={PromptContainer} />
            <Route path="battle" component={ConfirmBattleContainer} />
            <Route path="results" component={ResultsContainer} />
        </Route>
    </Router>
);

export default routes;