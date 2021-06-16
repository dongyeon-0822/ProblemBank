import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import MainPage from './pages/MainPage';

function AfterTest(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component= {MainPage}/>
            <Route exact path={`${match.url}/0`} component= {MainPage}/>
            <Route exact path={`${match.url}/1`} component= {MainPage}/>
        </Switch>
    )
}

export default AfterTest