import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowWarning } from '../component/ShowWarning';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const res = await axios.post("http://localhost:5000/userauth/signin", {
                  username: name,
                  email,
                  password
                });
                if (res.data.val) {
                  navigate('/login');
                } else {
                  setWarning(res.data.message);
                }
              } catch (error) {
                setWarning("An error occurred. Please try again.");
              }
            }}
          >
            Sign Up
          </button>
          {warning && <ShowWarning msg={warning} />}
        </div>
      </form>
    </div>
  );
};

export default Signup;





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ShowWarning } from '../component/ShowWarning';

// const Signup = () => {
//   const [name,setName]= useState("");
//   const [email,setEmail]= useState("");
//   const [password,setPassword]= useState("");
//   const [warning,setWarning]= useState("");
//   const navigate =useNavigate();
//   return (
//     <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div className="mb-4">
//         <h1 className='text-4xl font-bold py-2 px-4 text-center mb-4 '>Sign Up</h1>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       
//           type="text"
//           placeholder="Enter your name" onChange={(e)=>{
//             setName(e.target.value)
//           }}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
//           type="email"
//           placeholder="Enter your email"
//           onChange={(e)=>{
//             setEmail(e.target.value)
//           }}
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//           Password
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           type="password"
//           placeholder="Enter your password"
//           onChange={(e)=>{
//             setPassword(e.target.value)
//           }}
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={async (e)=>{
//             e.preventDefault(); 
//             const res =await axios.post("http://localhost:5000/userauth/signin",{
//                 username:name,
//                 email,
//                 password
//             })
//             if(res.data.val){
//                 navigate('/login')
//             }
//             else{
//                 setWarning(res.data.message);
//             }
//           }}
//         >
//           Sign Up
//         </button>
//         <ShowWarning msg={warning}></ShowWarning>
//       </div>
//     </form>
//   );
// };

// export default Signup