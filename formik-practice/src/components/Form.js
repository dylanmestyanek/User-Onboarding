import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <Field name="username" type="text" placeholder="Username" />
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field name="email" type="email" placeholder="E-mail" />
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field name="password" type="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
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
            .min(6, "Username must be longer than 6 characters")
            .required("A username is required"),
        email: Yup.string()
            .email("E-mail is mandatory")
            .required("An E-mail is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Invalid password")
    }),

    handleSubmit() {
        axios.post("https://reqres.in/api/users")
            .then(respo => console.log(respo))
            .catch(err => console.log("Whoopsies", err));

        
    }
})(LoginForm);

export default FormikLoginForm;