import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user from localStorage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="flex flex-col min-h-screen p-6 bg-gray-100">
            {/* Navbar with Logout Button */}
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
                <h2 className="text-xl font-bold">Dashboard</h2>
                {user && (
                    <button 
                        onClick={handleLogout} 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                )}
            </div>

            {/* Welcome Section */}
            <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
                {user ? (
                    <p className="text-lg">
                        Welcome, <span className="font-bold">{user.username}</span>! <br />
                        Your email: <span className="text-gray-600">{user.email}</span>
                    </p>
                ) : (
                    <p className="text-lg text-red-500">Please login.</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
