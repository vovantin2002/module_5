import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup"

export default function Edit() {
    const [sanPham, setSanPham] = useState({})
    const [loais, setLoais] = useState([])
    const {id} = useParams();
    const navigate = useNavigate()
    const laySanPham = async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`)
        console.log(result.data)
        setSanPham(result.data)
    }
    const layLoai = async () => {
        const result = await axios.get(`http://localhost:8080/productType`)
        setLoais(result.data)
    }
    useEffect(() => {
        laySanPham()
    }, {})
    useEffect(() => {
        layLoai()
    }, [])
    // const  handleSubmit = async (values, setErrors)=> {
    //     try {
    //         const response = await sua({
    //             ...values,
    //             status: JSON.parse(values.status),
    //         });
    //     } catch (error) {
    //         if (error.response && error.response.data) {
    //             // Set the validation errors
    //             setErrors(error.response.data);
    //         }
    //     }
    // }
    const sua = async (sanPham) => {
        const sanPham1 = {...sanPham, productType: JSON.parse(sanPham.productType),}
        await axios.put(`http://localhost:8080/product/${id}`, sanPham1)
        await navigate("/sanPham")
        await alert("Sua thanh cong")
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>TRANG SUA </h1>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    ...sanPham, productType: JSON.stringify(sanPham?.productType),
                }
                }
                validationSchema={
                    Yup.object({
                        name: Yup.string().max(100, "Ten san pham khong duoc dai qua 100 ki tu"),
                        // ngayNhap: Yup.date().min( "ngay nhap khong duoc lon hon ngay hien tai"),
                        quantity: Yup.number().min(1, "So luong phai la so nguyen va lon hon 0")
                    })
                }
                // onSubmit={(values, { setErrors }) => {
                //     handleSubmit(values, setErrors);
                // }
                onSubmit={(values) => {
                    sua(values)
                }
                }>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên</label>
                        <Field type="text" name="name" className="form-control" placeholder="Nhập tên"/>
                        <ErrorMessage name={"name"} component={"span"}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateAdded" className="form-label">ngay nhap</label>
                        <Field type="text" name="dateAdded" className="form-control" placeholder="Nhập ngay nhap"/>
                        <ErrorMessage name={"dateAdded"} component={"span"}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label"> so luong"</label>
                        <Field type="number" name="quantity" className="form-control" placeholder="Nhập so luong"/>
                        <ErrorMessage name={"quantity"} component={"span"}/>
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
                    <button type="submit" className="btn btn-primary">Sua</button>
                </Form>
            </Formik>
        </>
    )
}
