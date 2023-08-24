import React from 'react';

function List() {
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
                                <th>Contract code</th>
                                <th>Facility code</th>
                                <th>Facility name</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Deposit</th>
                                <th>Total payment</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: "#F9F9FA"}}></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List