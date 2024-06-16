import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  // const [lg, setLg] = useState(true);
  const lg = localStorage.getItem("login");

  // const checkLogin = ()=>{
  //   if(localStorage.getItem("login")===true){
  //     setLg(true);

  //   }
  // }
  // useEffect=()=>{
  //   checkLogin()
  // ,[]}
  return (
    <nav className="border-b-2 border-gray-200 py-2.5 px-[200px] bg-purple-50">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <img
          className="h-[100px] "
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALtOxG1WRlUywqPVhc0nHRR0OQFL6i35lyQ&s'
          alt='logo'
        />
        {/* Links Section */}
        <div className="flex space-x-8">
          <Link to='/home' className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg cursor-pointer">Home</Link>
          <Link className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">About</Link>
          <Link className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Contact Us</Link>
          {/* {
            checkLogin
          } */}
          {/* {
            lg===true?(<Link to ="/"className="text-xl  font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Login</Link>):(<></>)
          }
          {
            lg===true?(<Link to ="/signup"className="text-xl  font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Signup</Link>):(<></>)
          } */}
           <Link to ="/"className="text-xl  font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Logout</Link> 
          {/*<Link} to ="/signup" className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Sign Up</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
