import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function List() {
    const [contracts, setContracts] = useState([]);
    const [contract, setContract] = useState({});
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/contract');
        setContracts(result.data);
    }
    useEffect(() => {
        getAll();
    }, [])
    const deleteContract = async (id) => {
        await axios.delete(`http://localhost:8080/contract/${id}`)
        await alert("Xoa thanh cong")
        getAll();
    }
    return (
        <>
            {/*    list*/}
            <div className="card">
                <div className="card-body">
                    <h1><Link to={"/create"}>Create</Link></h1>
                    {/*          viet bảng ở đây*/}
                    <div className="table-responsive">
                        <table
                            className="table table-bordered table-sm"
                            style={{width: "100%", backgroundColor: "#dee6ee"}}
                        >
                            <thead style={{backgroundColor: "#FFFFFF"}}>
                            <tr>
                                <th>STT</th>
                                <th>Contract Id</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Deposit</th>
                                <th>Total payment</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: "#F9F9FA"}}>
                            {
                                contracts.map((contract, index) => (
                                    <tr key={contract.id}>
                                        <td>{index + 1}</td>
                                        <td>{contract.id}</td>
                                        <td>{contract.startDate}</td>
                                        <td>{contract.endDate}</td>
                                        <td>{contract.deposit}</td>
                                        <td>{contract.totalPayment}</td>
                                        <td><Link to={`/contract/${contract.id}`}>
                                            <button className="btn btn-primary btn-sm">Edit</button>
                                        </Link></td>
                                        <td>
                                            {/* Button trigger modal */}
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={() => setContract(contract)}
                                            >
                                                Delete
                                            </button>
                                            {/*<button onClick={()=>deleteContract(contract.id)}></button>*/}
                                        </td>
                                    </tr>
                                ))
                            }
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
                        <div className="modal-body">Ban co chac chan muon xoa contract:</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary"
                                    onClick={() => deleteContract(contract.id)}>
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