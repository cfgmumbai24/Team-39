import React from 'react'
import Navbar from './Navbar'

const Literatureform = () => {
  return (
    <div>
        <Navbar/>
    
    <div>
        <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" >
      English
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Enter English Marks"
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
    
    />
  </div>


  


  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => {
        
      }}
    >
      Submit
    </button>
  </div>
</form>
    </div>
    </div>
  )
}

export default Literatureform