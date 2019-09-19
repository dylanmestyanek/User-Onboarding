import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <Field name="username" type="text" placeholder="Username" />
            {errors.username && <p>{errors.username}</p>}
            <Field name="email" type="email" placeholder="E-mail" />
            {errors.email && <p>{errors.email}</p>}
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && <p>{errors.password}</p>}
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

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(6)
            .required("A username is required"),
        email: Yup.string()
            .email()
            .required("An E-mail is required"),
        password: Yup.string()
            .min(6)
            .required("Invalid password")
    }),

    handleSubmit(values) {
        console.log(values)
    }
})(LoginForm);

export default FormikLoginForm;