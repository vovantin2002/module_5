import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function EditBook() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState();

    useEffect(() => {
        loadBook();
    },[book]);

    const loadBook = async () => {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        const loadedBook = response.data;
        setBook(loadedBook);
    };

    const editBook = async (values) => {
        const updatedBook = {...book, ...values};
        await axios.put(`http://localhost:8080/books/${id}`, updatedBook);
        navigate("/books");
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                ...book,
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("Required"),
                quantity: Yup.number().required("Required"),
            })}
            onSubmit={async (values) => {
                await editBook(values);
                alert("Sửa thành công!");
            }}
        >
            <Form>
                <div>
                    <h1>Sửa sách</h1>
                    <br/>
                    <Field type="text" name="title" placeholder="Nhập title"/>
                    <ErrorMessage name="title" className="form-error"/>
                    <Field type="number" name="quantity" placeholder="Nhập số lượng"/>
                    <ErrorMessage name="quantity" className="form-error"/>
                    <button type="submit">Cập nhật</button>
                </div>
            </Form>
        </Formik>
    );
}