import React, {useEffect, useState} from 'react';
import axios from "axios";

function List() {
    const [services, setServices] = useState([]);
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/service');
        setServices((prev) => result.data)
    }
    useEffect(() => {
        getAll();
    }, [])
    return (
        <>
            {services.map((service) => (
                <div className="card" style={{width: '18rem'}} key={service.id}>
                    <img src={service.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">Area: {service.area}</p>
                        <p className="card-text">Cost: {service.cost}</p>
                        <p className="card-text">Capacity: {service.capacity}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default List;