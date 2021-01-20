import React, { Component, Suspense, lazy } from "react";
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

class App extends Component {
  render() {
    return (
      <Router>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/d/:id">
              <Design />
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
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(App);
