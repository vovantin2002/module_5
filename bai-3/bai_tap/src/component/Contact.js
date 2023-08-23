import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export function Contact() {
    return (
        <>
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .required("Required"),
                    email: Yup.string()
                        .required("Required")
                        .email(),
                    phone: Yup.string()
                        .required("Required")
                })}
            onSubmit={(values) => alert("Add contact successfully!!!")
            }
        >
            <Form>
                <div>
                    name: <Field type='text' name='name'></Field>
                    <ErrorMessage name="name" className="form-error"/>
                    <br/>
                    email: <Field type='text' name='email'></Field>
                    <ErrorMessage name="email" className="form-error"/>
                    <br/>
                    phone: <Field type='text' name='phone'></Field>
                    <ErrorMessage name="phone" className="form-error"/>
                    <br/>
                    message: <textarea name='message'></textarea>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    </>
    )
}