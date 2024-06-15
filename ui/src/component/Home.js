import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../pages/Navbar';
const Home = () => {
    const [rollno, setRollno] = useState('');
    const navigate = useNavigate();
    const Progress = (e) => {
        e.preventDefault();
        axios
          .post("https://localhost:8000/progress", { rollno: rollno})
          .then((result) => {
            navigate("/progress");
          })
          .catch((err) => console.log(err));
      };
        const Edit = (e) => {
            e.preventDefault();
            axios
            .post("https://localhost:8000/edit", { rollno: rollno})
            .then((result) => {
                navigate("/edit");
            })
            .catch((err) => console.log(err));
        };

    return (
        <div>
            <Navbar/>

            <div>
                <input

                    onChange={(e) => {
                        setRollno(e.target.value);
                    }} type="text" placeholder="Enter Student's Rollno" className="border-2 border-gray-300 p-2 m-2" />
            </div>
            <div className='flex'>
                <div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 h-48 w-64" onClick={Progress}>Progress</button>

                </div>
                <div>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2 h-48 w-64" onClick={Edit}>Edit</button>

                </div>
            </div>
        </div>
    )
}

export default Home