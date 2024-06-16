import React, { useState } from 'react';
import Navbar from './Navbar';
import Updateoredit from './updateoredit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FoundationForm = () => {
  const {id}=useParams();
  const [submitted,setSubmitted]=useState(false)
  const [formValues, setFormValues] = useState({
    sid:Number(id),
    speaking: 0,
    listening: 0,
    writing: 0,
    physicalInvolvement: 0,
    craft: 0
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
      const response=await axios.post('http://localhost:5000/found',formValues);
      console.log(response);
      setSubmitted(true)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
        <Updateoredit/>
        {submitted ? (
          <>
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center shadow-lg mt-5">
              Successfully Submitted
          </div>
          </>
        ):(
          <>
          <div>
      <form
        className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {[
          { label: 'Speaking', name: 'speaking' },
          { label: 'Learning', name: 'learning' },
          { label: 'Writing', name: 'writing' },
          { label: 'Physical Involvement', name: 'physicalInvolvement' },
          { label: 'Craft', name: 'craft' }
        ].map((field) => (
          <div className="mb-4 flex items-center justify-between" key={field.name}>
            <label className="block text-gray-700 text-sm font-bold mb-2 w-1/3">
              {field.label} 
            </label>
            <div className="flex items-center w-2/3 justify-end">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="inline-flex items-center mr-2">
                  <input
                    type="radio"
                    name={field.name}
                    value={num}
                    // checked={formValues[field.name] === `${num}`}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-1">{num}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
          </>
        )}
        
    </div>
  );
};

export default FoundationForm;
