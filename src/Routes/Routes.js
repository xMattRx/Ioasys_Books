import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Home from '../views/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route element={<Home/>} path="/" />
      </Switch>
    </Router>
  )
}
