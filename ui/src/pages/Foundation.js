import React, { useState } from 'react';
import Navbar from './Navbar';
import Updateoredit from './updateoredit';

const FoundationForm = () => {
  const [formValues, setFormValues] = useState({
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
      [name]: parseInt(value)
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form Values:', formValues);
  };

  return (
    <div>
        <Navbar />
        <div>
      <form
        className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {[
          { label: 'Speaking', name: 'speaking' },
          { label: 'Listening', name: 'listening' },
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
                    checked={formValues[field.name] === `${num}`}
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
    </div>
  );
};

export default FoundationForm;