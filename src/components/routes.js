import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login";

const AppRouter = ({loggedIn, firebaseAuth, fbDatabase, ImageInput}) => {
  console.log(fbDatabase);
  return (
    <Router>
      <Switch>
        {loggedIn ? (
          <>
            <Route exact path='/'>
              <Home
                ImageInput={ImageInput}
                firebaseAuth={firebaseAuth}
                fbDatabase={fbDatabase}
              />
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
