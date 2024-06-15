import React, { useEffect, useState } from "react";
import {LineChart, Line, XAxis, YAxis} from "recharts";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChartsL() {
  const {id}=useParams();
  const [record,setRecord]=useState([]);
  useEffect(() => {
      // Define an async function to fetch data and process it
      const fetchData = async () => {
        try {
          // Fetch data from the server
          const response = await axios.post('http://localhost:5000/lit/l', {  sid: id  });
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
    <div>
      <h1>Graph Rerport</h1>
      <LineChart data={record} width={500} height = {500}>
        <XAxis dataKey="day"></XAxis>
        <YAxis/>
        <Line dataKey="avg"/>

      </LineChart>

    </div>
  );
}

export default ChartsL