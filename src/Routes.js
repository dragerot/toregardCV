import React from 'react';
import {Route,IndexRoute} from 'react-router';
import A from './A';
import App from './App'
import Form from './Form'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={A} />
        <Route path="form" component={Form} />
    </Route>
);
