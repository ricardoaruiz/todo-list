import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Todo from './pages/todo/Todo'
import About from './pages/about/About'

export default props => (
    <Switch>
        <Route path="/" exact={true} component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/" />
    </Switch>
)