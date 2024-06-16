import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {LineChart, Line, XAxis, YAxis} from "recharts";

function ChartsF() {
    const {id}=useParams();
    const [record,setRecord]=useState([]);
    useEffect(() => {
        // Define an async function to fetch data and process it
        const fetchData = async () => {
          try {
            // Fetch data from the server
            const response = await axios.post('http://localhost:5000/found/f', {  sid: id  });
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
    // const record = [
    //     {
    //         average:30, day:1
    //     },
    //     {
    //         average:50, day:2
    //     },
    //     {
    //         average:20, day:3
    //     },
    //     {
    //         average:60, day:4
    //     },
    //     {
    //         average:90, day:5
    //     }
    // ]
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

export default ChartsF