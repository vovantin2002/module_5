import { Component } from "react";

class StudentInfoComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>Id:</th>
                        <th>Name:</th>
                        <th> Age:</th>
                        <th>Address:</th>
                    </tr>
                    {
                        this.props.studentList.map((student, index) => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))
                    }

                </table>
            </>
        )
    }
}
export default StudentInfoComponent;