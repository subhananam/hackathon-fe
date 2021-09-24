import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import Trucks from 'src/Pages/Trucks';
import Dashboard from '../Pages/Dashboard';
import Page1 from '../Pages/Page1';

function AppRouter() {
    return (
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/trucks">
            <Trucks />
          </Route>
        </Switch>
    )
}

export default AppRouter
