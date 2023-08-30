import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Create() {
    const navigate = useNavigate();
    const [typeCustomers, setTypeCustomers] = useState([]);
    const getTypeCustomers = async () => {
        const result = await axios.get("http://localhost:8080/typeCustomer");
        setTypeCustomers(result.data);
    }
    const add = async (customer) => {
        const customer1 = {...customer, typeCustomer: JSON.parse(customer.typeCustomer),}
        await axios.post("http://localhost:8080/customer", customer1);
        navigate("/customer")
        await alert("Them moi thanh cong")
    }
    useEffect(() => {
        getTypeCustomers()
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    gender: '',
                    email: '',
                    birthday: '',
                    phoneNumber: '',
                    citizenId: '',
                    address: '',
                    typeCustomer: ''
                }
                }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .matches("^[A-Z][a-z]*(\\s[A-Z][a-z]*)*$")
                            .required("Can't be left blank"),
                        email: Yup.string().email("Email khong dung dinh dang")
                            .required("Can't be left blank"),
                        birthday: Yup.string().required("Can't be left blank"),
                        phoneNumber: Yup.string().required("Khong duoc de trong")
                            .matches("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$"),
                        citizenId: Yup.string().required("Can't be left blank")
                            .matches("^[0-9]{9}$"),
                        address: Yup.string().required("Can't be left blank")
                    })
                }
                onSubmit={(values) => {
                    add(values);
                }
                }>
                <Form>
                    {/* add Start */}
                    <div className="container-fluid booking pb-5 wow fadeIn"
                         data-wow-delay="0.1s">
                        <div className="container">
                            <div className="bg-white shadow" style={{padding: 35}}>
                                <div className="row g-2">
                                    <div className="col-md-10">
                                        <div className="row g-2">
                                            <div className="col-md-3">
                                                <div className="date" id="date1" data-target-input="nearest">
                                                    <Field
                                                        name="name"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Name"
                                                        data-target="#date1"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="name" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="birthday"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Birthday"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="birthday" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    Gender:
                                                    <Field name="gender" type="radio" value="Nam"/>Male
                                                    <Field name="gender" type="radio" value="Nu"/>Female
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date3" data-target-input="nearest">
                                                    <Field
                                                        name="citizenId"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Citizen Id"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="citizenId" className="form-error"/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-md-3">
                                                <div className="date" id="date4" data-target-input="nearest">
                                                    <Field
                                                        name="phoneNumber"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Phone number"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="phoneNumber" className="form-error"/>
                                                </div>
                                            </div>
                                            {/*<div className="col-md-3">*/}
                                            {/*    <div className="date" id="date5" data-target-input="nearest">*/}
                                            {/*        <Field*/}
                                            {/*            type="text"*/}
                                            {/*            className="form-control datetimepicker-input"*/}
                                            {/*            placeholder="Phone number"*/}
                                            {/*            data-target="#date2"*/}
                                            {/*            data-toggle="datetimepicker"*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="col-md-3">
                                                <div className="date" id="date6" data-target-input="nearest">
                                                    <Field
                                                        name="email"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Email"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="email" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date6" data-target-input="nearest">
                                                    <Field
                                                        name="address"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Address"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage component='span' name="address" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date6" data-target-input="nearest">
                                                    <Field as="select" name="typeCustomer" id="">
                                                        <option value="">Type Customer</option>
                                                        {
                                                            typeCustomers.map((typeCustomer) => {
                                                                return (
                                                                    <option value={`${JSON.stringify(typeCustomer)}`}
                                                                            key={typeCustomer.id}>{typeCustomer.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* add End */}
                </Form>
            </Formik>
        </>
    );
}

export default Create;