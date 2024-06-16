import React, { useState } from 'react'
import Navbar from './Navbar'
import Updateoredit from './updateoredit'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Literatureform = () => {
  const {id}=useParams();
  const [submitted,setSubmitted]=useState(false)
  const [formValues, setFormValues] = useState({
    sid:Number(id),
    english: 0,
    hindi: 0,
    marathi: 0
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: Number(value)
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    try {
      const response=await axios.post('http://localhost:5000/lit',formValues);
      console.log(response);
      setSubmitted(true)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
        <Updateoredit/>
    {submitted?
    (
      <>
      <div>Successfully Submitted</div>
      </>
    )
    :
    (<div>
        <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" >
      English
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Enter English Marks"
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" >
    Marathi
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Enter Marathi Marks"
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" >
    Hindi
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Enter Hindi Marks"
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>
    </div>)
    }
    </div>
  )
}

export default Literatureform