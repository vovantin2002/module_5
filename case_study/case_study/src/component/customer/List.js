import React, {useEffect, useState} from 'react';
import axios from "axios";

function List() {
    const [customers, setCustomers] = useState([]);
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/customer');
        setCustomers(result.data)
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
                                        </tr>
                                    )
                                )
                            }
                            <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* /.card-body */}
                {/*        <div class="card-footer">*/}
                {/*        </div>*/}
                {/* /.card-footer*/}
            </div>
        </>
    );
}

export default List
