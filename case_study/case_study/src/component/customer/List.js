import React from 'react';

function List() {
    return (
        <>
            <>
                {/*    list*/}
                <div className="card">
                    <div className="card-body">
                        {/*          viet bảng ở đây*/}
                        <div className="table-responsive">
                            <table
                                className="table table-bordered table-sm"
                                style={{ width: "100%", backgroundColor: "#dee6ee" }}
                            >
                                <thead style={{ backgroundColor: "#FFFFFF" }}>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Birthday</th>
                                    <th>Phone number</th>
                                    <th>Citizen ID</th>
                                </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#F9F9FA" }}></tbody>
                            </table>
                        </div>
                    </div>
                    {/* /.card-body */}
                    {/*        <div class="card-footer">*/}
                    {/*        </div>*/}
                    {/* /.card-footer*/}
                </div>
            </>

        </>
    );
}
export default List
