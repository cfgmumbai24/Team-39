import React, { useState } from 'react'
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../pages/Navbar';
const Home = () => {
    const [rollno, setRollno] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const Progress = (e) => {
            e.preventDefault();
            navigate(`/${rollno}/progress`);
      };
        const Edit = (e) => {
            e.preventDefault();
            navigate(`/${rollno}/edit`);
        };

    return (
        <>
        <Navbar/>
        
        <div className='flex flex-row h-[82vh] px-4 py-4 bg-purple-50'>

            {/* First Div - 40% width */}
            <div className='w-3/5 flex items-center justify-center'>
                <img className=" h-[400px] rounded-xl shadow-xl shadow-gray-500/50" src="https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607_1280.jpg" alt="child photo"/>
            </div>

            {/* Second Div - 60% width */}
            <div className="w-2/5 p-4 bg-gray-100 rounded-lg shadow-lg h-70vh flex flex-col justify-center">
            {/* Greeting Section */}
            <div className="mb-6 text-[40px] font-semibold text-gray-700">
                <p>Hello,</p>
                <p>Welcome Back</p>
            </div>

            {/* Input Field */}
            <div className="mb-6">
                <input
                onChange={(e) => setRollno(e.target.value)}
                type="text"
                placeholder="Enter Student's Rollno"
                className="border-2 border-gray-300 p-2 w-full focus:border-blue-500 focus:outline-none rounded-xl"
                />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            {/* Buttons */}
            <div className="flex space-x-4">
                
                <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-16 w-full"
                onClick={Progress}
                >
                Progress
                </button>
                
                <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg h-16 w-full"
                onClick={Edit}
                >
                Edit
                </button>
            </div>
            </div>

        </div>
        </>
    )
}

export default Home
