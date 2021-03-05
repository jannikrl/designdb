import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Header from "./components/Header/Header";
import * as authSelectors from "./store/auth/selectors";
import * as authActions from "./store/auth/actions";
import { RootState } from "./store/types";

const Design = lazy(() => import("./containers/Design/Design"));
const DesignEdit = lazy(() => import("./containers/DesignEdit/DesignEdit"));
const DesignCreate = lazy(
  () => import("./containers/DesignCreate/DesignCreate")
);
const DesignerCreate = lazy(
  () => import("./containers/DesignerCreate/DesignerCreate")
);
const DesignerEdit = lazy(
  () => import("./containers/DesignerEdit/DesignerEdit")
);
const Designer = lazy(() => import("./containers/Designer/Designer"));
const Manufacturer = lazy(
  () => import("./containers/Manufacturer/Manufacturer")
);
const ManufacturerEdit = lazy(
  () => import("./containers/ManufacturerEdit/ManufacturerEdit")
);
const ManufacturerCreate = lazy(
  () => import("./containers/ManufacturerCreate/ManufacturerCreate")
);

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.autoLogin());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/design/create">
            <DesignCreate />
          </Route>
          <Route path="/design/:id/edit">
            <DesignEdit />
          </Route>
          <Route path="/design/:id">
            <Design />
          </Route>
          <Route path="/designer/create">
            <DesignerCreate />
          </Route>
          <Route path="/designer/:id/edit">
            <DesignerEdit />
          </Route>
          <Route path="/designer/:id">
            <Designer />
          </Route>
          <Route path="/manufacturer/create">
            <ManufacturerCreate />
          </Route>
          <Route path="/manufacturer/:id/edit">
            <ManufacturerEdit />
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

export default App;
