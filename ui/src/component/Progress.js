import React,{useState,useEffect} from 'react'
import Navbar from '../pages/Navbar'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DatesBoxes from '../pages/DatesBoxes';
const Progress = () => {
    const [list, setList] = useState([]);
    const navigate=useNavigate();
    const {id}=useParams();
    const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    let days;

    // Determine the number of days based on the selected month
    switch (selectedMonth) {
      case 'january':
        days = 31;
        break;
      case 'february':
        days = 28; // Assume non-leap year for simplicity, or you can add leap year logic here
        break;
      case 'march':
        days = 31;
        break;
      case 'april':
        days = 30;
        break;
      case 'may':
        days = 31;
        break;
      case 'june':
        days = 30;
        break;
      case 'july':
        days = 31;
        break;
      case 'august':
        days = 31;
        break;
      case 'september':
        days = 30;
        break;
      case 'october':
        days = 31;
        break;
      case 'november':
        days = 30;
        break;
      case 'december':
        days = 31;
        break;
      default:
        days = 31;
        break;
    }
    setMonth([selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1), days]);
  };
  const chartf = (e) => {
    e.preventDefault();
    navigate(`/${id}/progress/chartf`);
};
  const chartl = (e) => {
    e.preventDefault();
    navigate(`/${id}/progress/chartl`);
};
  const chartn = (e) => {
    e.preventDefault();
    navigate(`/${id}/progress/chartn`);
};

  const [Foundation, setFoundation] = useState(true);
  const [Language, setLanguage] = useState(false);
  const [Numerical, setNumerical] = useState(false);
  const [month,setMonth] = useState(["January",31]);
  const display=()=>{
    if(Foundation) return <div className=' text-center text-3xl font-semibold mt-8'>Foundation</div>
    if(Language) return <div className=' text-center text-3xl font-semibold mt-8'>Language</div>
    if(Numerical) return <div className=' text-center text-3xl font-semibold mt-8'>Numerical</div>
  }
  return (
    <div>
      <Navbar/>
      <div> {display()}</div>
      <div className="flex flex-wrap justify-center gap-x-20 mt-4 ">
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
    <div className=' flex flex-row w-[100%] px-16 gap-x-16 mt-8'>   {/*2 part*/}
      <div className='flex mt-16'>

        {Foundation && (
            <div>
            <label htmlFor="months" className="block text-l font-medium text-gray-700 mb-2 text-center">
                Select Month
            </label>
            <select
        name="months"
        id="months"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleMonthChange}
      >
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
            <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow" onClick={chartf}>
                    Generate Report
                </button>
            </div>
            </div>
        )}

        {Language && (
            <div>
            <label htmlFor="months" className="block text-sm font-medium text-gray-700 mb-2">
                Select Month
            </label>
            <select
        name="months"
        id="months"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleMonthChange}
      >
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
            <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow" onClick={chartl}>
                    Generate Report
                </button>
            </div>
            </div>
        )}

        {Numerical && (
            <div>
            <label htmlFor="months" className="block text-sm font-medium text-gray-700 mb-2">
                Select Month
            </label>
            <select
        name="months"
        id="months"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleMonthChange}
      >
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
            <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow" onClick={chartn}>
                    Generate Report
                </button>
            </div>
            </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <DatesBoxes month={month[0]} days={month[1]} />
      </div>

      </div>

    </div>
  )
}

export default Progress