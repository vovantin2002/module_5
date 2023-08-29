import React, {useEffect, useState} from 'react';
import axios from "axios";

function List() {
    const [contracts, setContract] = useState([]);
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/contract');
        setContract(result.data);
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
                                <th>STT</th>
                                <th>Contract Id</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Deposit</th>
                                <th>Total payment</th>
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
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List