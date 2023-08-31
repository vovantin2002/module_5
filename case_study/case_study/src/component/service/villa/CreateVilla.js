import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Create() {
    const navigate=useNavigate();
    const [typeServices, setTypeService] = useState([]);
    const getTypeService = async () => {
        const result = await axios.get("http://localhost:8080/typeService");
        await setTypeService(result.data);
    }
    useEffect(() => {
        getTypeService()
    }, [])
    const add = async (service) => {
        const service1 = {...service, typeService: JSON.parse(service.typeService),}
        await axios.post("http://localhost:8080/service", service1);
        alert("Them moi thanh cong")
        navigate("/service")
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    area: 0,
                    cost: "",
                    capacity: "",
                    image: "",
                    rentalType: "",
                    typeService: ""
                }
                }
                validationSchema={
                    Yup.object({
                        name: Yup.string().required("Can't be left blank")
                            .matches("^[A-Za-z|\\s]{1,50}$"),
                        area: Yup.number().required("Can't be left blank")
                            .min(1, "Area must be a positive number"),
                        cost: Yup.string().required("Can't be left blank"),
                        capacity: Yup.string().required("Can't be left blank"),
                        image: Yup.string().required("Can't be left blank"),
                        rentalType: Yup.string().required("Can't be left blank"),
                    })
                }
                onSubmit={(values) => {
                    add(values);
                }
                }>
                <Form>
                    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="bg-white shadow" style={{padding: '35px;'}}>
                                <div className="row g-2">
                                    <div className="col-md-10">
                                        <div className="row g-2">
                                            <div className="col-md-3">
                                                <div className="date" id="date1" data-target-input="nearest">
                                                    <Field name="name"
                                                           type="text" className="form-control datetimepicker-input"
                                                           placeholder="Name" data-target="#date1"
                                                           data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="name" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="area"
                                                        type="text" className="form-control datetimepicker-input"
                                                        placeholder="Area "
                                                        data-target="#date2" data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="area" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="cost" type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Cost "
                                                        data-target="#date2" data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="cost" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="capacity" type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Capacity "
                                                        data-target="#date2" data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="capacity"
                                                                  className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="image" type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Image "
                                                        data-target="#date2" data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="image" className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date2" data-target-input="nearest">
                                                    <Field
                                                        name="rentalType" type="text"
                                                        className="form-control datetimepicker-input"
                                                        placeholder="Rental Type "
                                                        data-target="#date2" data-toggle="datetimepicker"/>
                                                    <ErrorMessage component='span' name="rentalType"
                                                                  className="form-error"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="date" id="date3" data-target-input="nearest">
                                                    <Field as="select" name="typeService">
                                                        <option value="">Type Service</option>
                                                        {
                                                            typeServices.map((typeService) => {
                                                                return (
                                                                    <option key={typeService.id}
                                                                            value={`${JSON.stringify(typeService)}`}
                                                                    >{typeService.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-primary w-100">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default Create;