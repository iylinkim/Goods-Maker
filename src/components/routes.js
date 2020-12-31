import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login";

const AppRouter = ({
  authService,
  loggedIn,
  firebaseAuth,
  fbDatabase,
  ImageInput,
}) => {
  return (
    // <Router>
    //   <Switch>
    //     {loggedIn ? (
    //       <>
    //         <Route exact path='/'>
    //           <Home
    //             ImageInput={ImageInput}
    //             firebaseAuth={firebaseAuth}
    //             fbDatabase={fbDatabase}
    //           />
    //         </Route>
    //       </>
    //     ) : (
    //       <Route exact path='/'>
    //         <Login firebaseAuth={firebaseAuth} authService={authService}/>
    //       </Route>
    //     )}
    //   </Switch>
    // </Router>
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home
            ImageInput={ImageInput}
            firebaseAuth={firebaseAuth}
            fbDatabase={fbDatabase}
          />
        </Route>
        <Route exact path='/'>
          <Login firebaseAuth={firebaseAuth} authService={authService} />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
