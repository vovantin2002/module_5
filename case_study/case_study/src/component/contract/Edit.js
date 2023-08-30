import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Edit() {
    const navigate=useNavigate();
    const {id} = useParams();
    const [contracts, setContracts] = useState([])
    const getContract = async () => {
        const result = await axios.get(`http://localhost:8080/contract/${id}`)
        setContracts(result.data);
    }
    useEffect(() => {
        getContract()
    }, [])
    const add = async (contract) => {
        await axios.put(`http://localhost:8080/contract/${id}`, contract);
        await alert("Sua thanh cong")
        navigate("/contract");
    }
    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    ...contracts,
                }
                }
                validationSchema={
                    Yup.object({
                        startDate: Yup.date().required("Can't be left blank"),
                        endDate: Yup.date().required("Can't be left blank"),
                        deposit: Yup.number().required("Can't be left blank").min(1, "deposit must be positive"),
                        totalPayment: Yup.string().required("Can't be left blank")
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
                                    {/*<Form className="form-control">*/}
                                    <div className="col-md-10">
                                        <div className="row g-2">
                                            <div className="col-md-3">
                                                <div className="date" id="date1" data-target-input="nearest">
                                                    Start Date:
                                                    <Field
                                                        name="startDate"
                                                        type="date"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Start Date"
                                                        data-target="#date1"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage name="startDate" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    End Date: <Field
                                                    name="endDate"
                                                    type="date"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Facility code"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                                    <ErrorMessage name="endDate" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date3" data-target-input="nearest">
                                                    <Field
                                                        name="deposit"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Deposit"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage name="deposit" className="form-error"/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-md-3">
                                                <div className="date" id="date4" data-target-input="nearest">
                                                    <Field
                                                        name="totalPayment"
                                                        type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Total Payment"
                                                        data-target="#date2"
                                                        data-toggle="datetimepicker"
                                                    />
                                                    <ErrorMessage name="totalPayment" className="form-error"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-primary w-100">Submit</button>
                                    </div>
                                    {/*</Form>*/}
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

export default Edit;