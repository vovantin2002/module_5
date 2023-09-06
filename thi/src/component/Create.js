import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup"

export default function Create() {
    const [loais, setLoais] = useState([])
    const {id} = useParams();
    const navigate = useNavigate()

    const layLoai = async () => {
        const result = await axios.get(`http://localhost:8080/productType`)
        setLoais(result.data)
    }
    useEffect(() => {
        layLoai()
    }, [])
    const add = async (sanPham) => {
        const sanPham1 = {...sanPham, productType: JSON.parse(sanPham.productType),}
        await axios.post(`http://localhost:8080/product`, sanPham1)
        console.log(sanPham)
        await navigate("/sanPham")
        await alert("Them moi thanh cong")
    }
    // const  handleSubmit = async (values, setErrors)=> {
    //      try {
    //          const response = await add({
    //              ...values,
    //              status: JSON.parse(values.status),
    //          });
    //      } catch (error) {
    //          if (error.response && error.response.data) {
    //              // Set the validation errors
    //              setErrors(error.response.data);
    //          }
    //      }
    //  }
    return (
        <>
            <h1 style={{textAlign: "center"}}>TRANG THEM MOI </h1>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    name: "",
                    dateAdded: "",
                    quantity: "",
                }
                }
                // validationSchema={
                //     Yup.object({
                //         name: Yup.string().max(100, "Ten san pham khong duoc dai qua 100 ki tu"),
                //         // ngayNhap: Yup.date().min( "ngay nhap khong duoc lon hon ngay hien tai"),
                //         quantity: Yup.number().min(1, "So luong phai la so nguyen va lon hon 0")
                //     })
                // }
                onSubmit={(values) => {
                    add(values)
                }
                }>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên</label>
                        <Field type="text" name="name" className="form-control" placeholder="Nhập tên"/>
                        <ErrorMessage name={"name"} component={"span"} className="error"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateAdded" className="form-label">ngay nhap</label>
                        <Field type="text" name="dateAdded" className="form-control" placeholder="Nhập ngay nhap"/>
                        <ErrorMessage name={"dateAdded"} component={"span"} className="error"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label"> so luong"</label>
                        <Field type="number" name="quantity" className="form-control" placeholder="Nhập so luong"/>
                        <ErrorMessage name={"quantity"} component={"span"} className="error"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productType" className="form-label">Loai</label>
                        <Field as="select" name="productType" className="form-control">
                            <option value="">--Chọn loai--</option>
                            {
                                loais.map((loai) => (
                                    <option key={loai.id} value={JSON.stringify(loai)}>{loai.name}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <button type="submit" className="btn btn-primary">Them moi</button>
                </Form>
            </Formik>
        </>
    )
}
