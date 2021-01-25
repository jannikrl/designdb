import React from "react";
import { connect } from "react-redux";
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
  const submitHandler = (values) => {
    props.login(values.email, values.password);
  };

  const errorMessage = props.error ? <p>Login failed</p> : null;
  const loading = props.loading ? <p>Loading</p> : null;
  const redirect = props.isAuthenticated ? <Redirect to="/" /> : null;

  return (
    <div>
      {errorMessage}
      {loading}
      {redirect}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={submitHandler}
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

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    login: (email, password) => dispatch(authActions.auth(email, password)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToState)(LoginForm)
);
