import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Logout from "./containers/Login/Logout/Logout";
import Header from "./components/Header/Header";
import * as authSelectors from "./store/auth/selectors";

const Design = lazy(() => import("./containers/Design/Design"));
const DesignEdit = lazy(() => import("./containers/Design/Edit/Edit"));
const Designer = lazy(() => import("./containers/Designer/Designer"));
const Manufacturer = lazy(() =>
  import("./containers/Manufacturer/Manufacturer")
);

const app = (props) => {
  return (
    <Router>
      <Header isAuthenticated={props.isAuthenticated} />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/design/:id/edit">
            <DesignEdit />
          </Route>
          <Route path="/design/:id">
            <Design />
          </Route>
          <Route path="/designer/:id">
            <Designer />
          </Route>
          <Route path="/manufacturer/:id">
            <Manufacturer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(app);
