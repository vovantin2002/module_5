import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export function MedicalDeclaration() {
    return (
        <Formik
            initialValues={{
                name: '',
                cmnd: '',
                birthday: '',
                gender: '0',
                nationality: '',
                company: '',
                part: '',
                healthInsuranceCard: '0',
                province: '',
                district: '',
                ward: '',
                apartmentNumber: '',
                phone: '',
                email: '',
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .required("Required"),
                    cmnd: Yup.string()
                        .required("Required"),
                    birthday: Yup.number()
                        .required("Required")
                        .min(1900),
                    nationality: Yup.string()
                        .required("Required"),
                    province: Yup.string()
                        .required("Required"),
                    district: Yup.string()
                        .required("Required"),
                    ward: Yup.string()
                        .required("Required"),
                    apartmentNumber: Yup.string()
                        .required("Required"),
                    phone: Yup.string()
                        .required("Required"),
                    email: Yup.string()
                        .required("Required")
                        .email()
                })
            }
            onSubmit={(values) => alert("Khai báo thành công!")}
        >
            <Form>
                <div>
                    <h3>Tờ khai y tế </h3>
                    <br/>
                    Họ tên
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" className="form-error"/>
                    <br/>
                    Số hộ chiếu/CMND
                    <Field type="text" name="cmnd"/>
                    <ErrorMessage name="cmnd" className="form-error"/>
                    <br/>
                    Năm sinh
                    <Field type="number" name="birthday"/>
                    <ErrorMessage name="birthday" className="form-error"/>
                    <br/>
                    Giới tính
                    <input name="gender" type="radio" value="Nam" />Nam
                    <input name="gender" type="radio" value="Nữ" />Nữ
                    Quốc tịch
                    <Field type="text" name="nationality"/>
                    <ErrorMessage name="nationality" className="form-error"/>
                    <br/>
                    Công ty làm việc
                    <Field type="text" name="company"/>
                    <ErrorMessage name="company" className="form-error"/>
                    <br/>
                    Bộ phận làm việc
                    <Field type="text" name="part"/>
                    <ErrorMessage name="part" className="form-error"/>
                    <br/>
                    Có thẻ bảo hiểm y tế <input type="checkbox" name="healthInsuranceCard"/>
                    <br/>
                    <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                    Tỉnh thành
                    <Field type="text" name="province"/>
                    <ErrorMessage name="province" className="form-error"/>
                    <br/>
                    Quận /huyện
                    <Field type="text" name="district"/>
                    <ErrorMessage name="district" className="form-error"/>
                    <br/>
                    Phường /xã
                    <Field type="text" name="ward"/>
                    <ErrorMessage name="ward" className="form-error"/>
                    <br/>
                    Số nhà, phố, tổ dân phố /thôn /đội
                    <Field type="text" name="apartmentNumber"/>
                    <ErrorMessage name="apartmentNumber" className="form-error"/>
                    <br/>
                    Điện thoại
                    <Field type="text" name="phone"/>
                    <ErrorMessage name="phone" className="form-error"/>
                    <br/>
                    Email
                    <Field type="text" name="email"/>
                    <ErrorMessage name="email" className="form-error"/>
                    <br/>
                    <h3>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào(có thể đi qua nhiều quốc
                        gia)</h3>
                    <textarea></textarea>
                    <h3>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h3>
                    <input type="checkbox"/> Sốt
                    <br/>
                    <input type="checkbox"/> Ho<br/>
                    <input type="checkbox"/> Khó thở<br/>
                    <input type="checkbox"/> Viêm phổi<br/>
                    <input type="checkbox"/> Đau họng<br/>
                    <input type="checkbox"/> Mệt mỏi<br/>
                    <h3>Trong vòng 14 ngày qua, Anh /Chị có tiếp súc với?</h3>
                    <input type="checkbox"/> Người bệnh hoặc nghi ngờ mắc bệnh COVID-19<br/>
                    <input type="checkbox"/> Người từ nước có bệnh COVID-19<br/>
                    <input type="checkbox"/> Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)<br/>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}