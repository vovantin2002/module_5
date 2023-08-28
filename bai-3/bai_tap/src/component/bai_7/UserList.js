import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getUsersRequest,
    deleteUserRequest,
} from './redux/Action';

const UserComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersRequest());
    }, [dispatch]);

    const handleDeleteUser = (userId) => {
        dispatch(deleteUserRequest(userId));
    };


    return (
        <div>
            <h1>User List</h1>
            <button onClick={() => getUsersRequest()}>
                Get user
            </button>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => handleDeleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default UserComponent;