import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Use navigate instead of <Link> if needed

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
            <p className="text-gray-600 mb-6">Please log in to access your dashboard.</p>
            <button 
                onClick={() => navigate('/login')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Login
            </button>
        </div>
    );
}

export default Home;
