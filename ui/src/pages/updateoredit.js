import React,{useState} from 'react'

const Updateoredit = () => {
    const [Language, setLanguage] = useState(false);
    const [Foundation, setFoundation] = useState(false);
    const [Numerical, setNumerical] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-x-20 mt-16">
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={()=>{setFoundation(true);
        setLanguage(false);
        setNumerical(false);
    }}>
        Foundation
    </button>
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={()=>{setFoundation(false);
        setLanguage(true);
        setNumerical(false);}}>
        Language
    </button>
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-yellow-500 text-white font-bold hover:bg-yellow-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={()=>{setFoundation(false);
        setLanguage(false);
        setNumerical(true);}}>
        Numerical
    </button>
    </div>
  )
}

export default Updateoredit