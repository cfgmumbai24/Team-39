import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowWarning } from '../component/ShowWarning.js';

const LoginPage = () => {
  const [name,setName]= useState("");
  const [password,setPassword]= useState("");
  const [warning,setWarning]= useState("");
  const navigate= useNavigate();
  return (
    
    <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h1 className='text-4xl font-bold py-2 px-4 text-center mb-4 '>Sign Up</h1>S
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       
          type="text"
          placeholder="Enter your name" onChange={(e)=>{
            setName(e.target.value)
          }}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your password"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={async (e)=>{
            e.preventDefault();
            const res=await axios.post("http://localhost:5000/userauth/login",{
                username:name,
                password
            })
            if(res.data.access){
                navigate('/')
            }
            else{
                setWarning(res.data.message)
            }
          }}
        >
          Sign Up
        </button>
        <ShowWarning msg={warning}></ShowWarning>
      </div>
    </form>
  );
};

export default LoginPage;