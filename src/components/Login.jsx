import { Formik, Form, Field, ErrorMessage } from "formik";
const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="pad-5">
            <Field
              placeholder="email"
              className="mar-5"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              placeholder="password"
              className="mar-5"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
            <button className="mar-5" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
