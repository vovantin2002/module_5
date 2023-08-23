import React from 'react';

function Create() {
    return (
        <>
            <>
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
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Name"
                                                    data-target="#date1"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Birthday"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                Gender:
                                                <input name="gender" type="radio" value="Male" />Male
                                                <input name="gender" type="radio" value="Female" />Female
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date3" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Citizen Id"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-md-3">
                                            <div className="date" id="date4" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Phone number"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date5" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Phone number"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date6" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Email"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date6" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    placeholder="Address"
                                                    data-target="#date2"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date6" data-target-input="nearest">
                                                <select name="" id="">
                                                    <option value="">Type Customer</option>
                                                    <option value="">Diamond</option>
                                                    <option value="">Platinium</option>
                                                    <option value="">Gold</option>
                                                    <option value="">Silver</option>
                                                    <option value="">Member</option>
                                                </select>
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
                {/* add End */}
            </>

        </>
    );
}

export default Create;