import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function ChartsN() {
  const { id,month } = useParams();
  const [record, setRecord] = useState([]);
  const montharray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  useEffect(() => {
    // Define an async function to fetch data and process it
    const fetchData = async () => {
      try {
        // Fetch data from the server
        const response = await axios.post('http://localhost:5000/num/n', { sid: id ,month:month});
        const data = response.data; // Extract the data from the response
        const newData = data.map((item, index) => ({
          ...item,
          day: index + 1
        }));

        console.log(newData);
        setRecord(newData);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
      }
    };

    fetchData(); // Call the async function to fetch and process data
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Numerical Graph Report</h1>
      <h1 className="text-2xl font-bold my-4">Month: {montharray[month-1]}</h1>
      <h1 className="text-2xl font-bold my-4">Roll No: {id}</h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={record} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottomRight', offset: -10 }} />
            <YAxis label={{ value: 'Average', angle: -90, position: 'insideLeft', offset: 10 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="avg" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartsN;




// raw one
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {LineChart, Line, XAxis, YAxis} from "recharts";

// function ChartsN() {
//   const {id}=useParams();
//   const [record,setRecord]=useState([]);
//   useEffect(() => {
//       // Define an async function to fetch data and process it
//       const fetchData = async () => {
//         try {
//           // Fetch data from the server
//           const response = await axios.post('http://localhost:5000/num/n', {  sid: id  });
//           const data = response.data; // Extract the data from the response
//           const newData = data.map((item, index) => ({
//             ...item,
//             day: index + 1
//           }));
//           console.log(newData); 
//           setRecord(newData); 
//         } catch (error) {
//           console.error('Error fetching data:', error); // Handle any errors
//         }
//       };
  
//       fetchData(); // Call the async function to fetch and process data
//     }, [id]);
//   return (
//     <div>
//       <h1>Graph Rerport</h1>
//       <LineChart data={record} width={500} height = {500}>
//         <XAxis dataKey="day"></XAxis>
//         <YAxis/>
//         <Line dataKey="avg"/>

//       </LineChart>
      

//     </div>
//   );
// }

// export default ChartsN