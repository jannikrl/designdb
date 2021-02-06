import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Redirect, withRouter } from "react-router-dom";
import * as authActions from "../../../store/auth/actions";
import * as authSelectors from "../../../store/auth/selectors";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const LoginForm = (props) => {
  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const login = (email, password) =>
    dispatch(authActions.login(email, password));

  const errorMessage = error ? <p>Login failed</p> : null;
  const loadingText = isLoading ? <p>Loading</p> : null;
  const redirect = isAuthenticated ? <Redirect to="/" /> : null;

  return (
    <div>
      {errorMessage}
      {loadingText}
      {redirect}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => login(values.email, values.password)}
      >
        {({ errors, touched }) => (
          <Form>
            <label for="email">Email</label>
            <Field name="email" type="email" id="email"></Field>
            {errors.email && touched.email ? <i>{errors.email}</i> : null}

            <label for="password">Password</label>
            <Field name="password" type="password" id="password"></Field>
            {errors.password && touched.password ? (
              <i>{errors.password}</i>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(LoginForm);
