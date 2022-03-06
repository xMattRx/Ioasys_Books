import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { VerificationLogged } from '../functions/VerificationLogged';
import Home from '../views/Home';
import Login from '../views/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route element={<Login/>} path="/" />
        <Route element={
          <VerificationLogged>
            <Home/>
          </VerificationLogged>
        } path="/Home" />
      </Switch>
    </Router>
  )
}
