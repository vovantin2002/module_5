import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bookData from "../../data/Book.json";

export function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});

    useEffect(() => {
        const editedBook = bookData.find((el) => el.id === parseInt(id));
        setBook(editedBook);
    }, [id]);

    const editBook = async (values) => {
        // Update the book data with the new values
        const updatedBook = { ...book, ...values };

        // Perform the book update operation using the updatedBook data
        // Replace this with your actual book update logic using the bookService
        console.log(updatedBook);
        // await bookService.editBook(id, updatedBook);

        navigate("/books");
    };

    return (
        <Formik
            initialValues={book}
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
                    <br />
                    <Field type="text" name="title" placeholder="Nhập title" />
                    <ErrorMessage name="title" className="form-error" />
                    <Field type="number" name="quantity" placeholder="Nhập số lượng" />
                    <ErrorMessage name="quantity" className="form-error" />
                    <button type="submit">Cập nhật</button>
                </div>
            </Form>
        </Formik>
    );
}