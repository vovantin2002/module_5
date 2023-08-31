import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function ListRoom() {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/roomService');
        setServices( result.data)
    }
    useEffect(() => {
        getAll();
    }, [])
    const deleteCustomer = async (id) => {
        await axios.delete(`http://localhost:8080/roomService/${id}`)
        await alert("Xoa thanh cong")
        getAll();
    }
    return (
        <>
            <h1><Link to={"/room/create"}>Create</Link></h1>
            <div className="row">
                {services.map((service) => (
                    <div className="col-md-3" key={service.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={service.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">Area: {service.area}</p>
                                <p className="card-text">Cost: {service.cost}</p>
                                <p className="card-text">Capacity: {service.capacity}</p>
                                <button className="btn btn-primary btn-sm">
                                    <Link to={`/room/${service.id}`} style={{ color: 'white' }}>
                                        Edit
                                    </Link>
                                </button>
                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => setService(service)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
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
                        <div className="modal-body">Ban co chac chan muon xoa customer: {service.name}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary"
                                    onClick={() => deleteCustomer(service.id)}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListRoom;