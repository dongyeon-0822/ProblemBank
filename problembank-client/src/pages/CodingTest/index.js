import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import testProblem from './pages/testProblem';

function CodingTest(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path = {`${match.url}`} component = {testProblem} />        
        </Switch>
    )
}

export default CodingTest
