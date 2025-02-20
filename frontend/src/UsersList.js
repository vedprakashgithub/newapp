import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UsersList() {
    const [users, setUsers] = useState([]);

    // Function to Fetch Users from Backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users');

            setUsers(response.data.users);
        } catch (error) {
            toast.error('Error fetching users');
            console.error('Fetch error:', error);
        }
    };

    // Run on Component Mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h2>Users List</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            ID: {user.id} - Username: {user.username}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
            <ToastContainer />
        </div>
    );
}

export default UsersList;
