import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import Header from "./components/Header/Header";
import * as authSelectors from "./store/auth/selectors";

const Design = lazy(() => import("./containers/Design/Design"));
const Designer = lazy(() => import("./containers/Designer/Designer"));

const app = (props) => {
  return (
    <Router>
      <Header isAuthenticated={props.isAuthenticated} />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/design/:id">
            <Design />
          </Route>
          <Route path="/designer/:id">
            <Designer />
          </Route>
          <Route path="/auth">
            <Auth />
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
