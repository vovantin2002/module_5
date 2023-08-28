import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import * as bookService from "../../service/BookManagementService"
import "../../App.css"


export function CreateBook() {
    const navigate = useNavigate();

    const addBook = async (values) => {
        await bookService.addBook(values);
        navigate("/books")
    }
    return (
        <Formik
            initialValues={{
                title: '',
                quantity: ''
            }
            }
            validationSchema={
                Yup.object({
                    title: Yup.string().required("Required"),
                    quantity: Yup.string().required("Required")
                })
            }
            onSubmit={async (values) => {
                await addBook(values);
                await alert("Them moi thành công!")
            }
            }>
            <Form>
                <div>
                    <h1>Them moi sach</h1>
                    <br/>
                    <Field type="text" name="title" placeholder="Nhap title"/>
                    <ErrorMessage name="title" className="form-error"/>
                    <Field type="number" name="quantity" placeholder="Nhap so luong"/>
                    <ErrorMessage name="quantity" className="form-error"/>
                    <button type="submit">Them moi</button>
                </div>
            </Form>
        </Formik>
    )
}