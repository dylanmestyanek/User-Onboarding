import React from "react";
import { withFormik, Form, Field } from "formik";

const LoginForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <Field name="username" type="text" placeholder="Username" />
            <Field name="email" type="email" placeholder="E-mail" />
            <Field name="password" type="password" placeholder="Password" />
            <label>
                <Field name="tos" type="checkbox" checked={values.tos} />
                Accept Terms of Service
            </label>
            <button type="submit">Submit</button>
        </Form>
    );
};

const FormikLoginForm = withFormik({
    mapsPropsToValues({ 
        username, 
        email,
        password,
        tos
    }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        }
    },

    handleSubmit(values) {
        console.log(values)
    }
})(LoginForm);

export default FormikLoginForm;