import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function List() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/customer');
        setCustomers(result.data)
    }
    const deleteCustomer = async (id) => {
        await axios.delete(`http://localhost:8080/customer/${id}`)
        await alert("Xoa thanh cong")
        getAll();
    }
    useEffect(() => {
        getAll();
    }, [])
    return (
        <>
            {/*    list*/}
            <div className="card">
                <div className="card-body">
                    {/*          viet bảng ở đây*/}
                    <h1 style={{textAlign: "center"}}><Link to={"/create"}>Create</Link></h1>
                    <div className="table-responsive">
                        <table
                            className="table table-bordered table-sm"
                            style={{width: "100%", backgroundColor: "#dee6ee"}}
                        >
                            <thead style={{backgroundColor: "#FFFFFF"}}>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Birthday</th>
                                <th>Phone number</th>
                                <th>Citizen ID</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: "#F9F9FA"}}>
                            {
                                customers.map((customer) => (
                                        <tr key={customer.id}>
                                            <td>{customer.id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.birthday}</td>
                                            <td>{customer.phoneNumber}</td>
                                            <td>{customer.citizenId}</td>
                                            <td><Link to={`/customer/${customer.id}`}>
                                                <button className="btn btn-primary btn-sm">Edit</button>
                                            </Link></td>
                                            <td> {/* Button trigger modal */}
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => setCustomer(customer)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                            <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Xoa
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Ban co chac chan muon xoa customer: {customer.name}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary"
                                    onClick={() => deleteCustomer(customer.id)}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List
