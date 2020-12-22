import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login";

const AppRouter = ({loggedIn, firebaseAuth}) => {
  return (
    <Router>
      <Switch>
        {loggedIn ? (
          <>
            <Route exact path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path='/'>
            <Login firebaseAuth={firebaseAuth} />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
