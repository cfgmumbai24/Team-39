import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Updateoredit = () => {
    const [Language, setLanguage] = useState(false);
    const [Foundation, setFoundation] = useState(false);
    const [Numerical, setNumerical] = useState(false);
    const navigate =useNavigate();
    const {id}=useParams();
    const found=(e)=>{
        e.preventDefault();
        setFoundation(true)
        setLanguage(false);
        setNumerical(false);
        navigate(`/${id}/edit/foundation`); 
    }
    const lit=(e)=>{
        e.preventDefault();
        navigate(`/${id}/edit/literature`);
    }
    const num=(e)=>{
        e.preventDefault();
        navigate(`/${id}/edit/numerical`);
    }
  return (
    <div>
        <div className='block'>
        <Navbar/>
        </div>
    <div className="flex flex-wrap justify-center gap-x-20 mt-16">
        
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={found}>
        Foundation
    </button>
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={lit}>
        Literature
    </button>
    <button className="h-24 w-48 border-2 border-gray-300 p-2 m-2 rounded-lg bg-yellow-500 text-white font-bold hover:bg-yellow-600 hover:shadow-lg transition duration-300 ease-in-out" onClick={num}>
        Numerical
    </button>
    </div>
    </div>
  )
}

export default Updateoredit