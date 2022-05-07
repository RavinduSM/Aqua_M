import React, {useState} from 'react'
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Angel: 4000
  },
  {
    name: "February",
    Angel: 1000,
  },
  {
    name: "March",
    Angel: 3000,
  },
  {
    name: "April",
    Angel: 2000,
  },
  {
    name: "May",
    Angel: 2500,
  },
  {
    name: "June",
    Angel: 1000,
  },
  {
    name: "July",
    Angel: 800,
  },
  {
    name: "August",
    Angel: 1000,
  },
  {
    name: "September",
    Angel: 1500,
  },
  {
    name: "October",
    Angel: 1800,
  },
  {
    name: "November",
    Angel: 1500,
  },
  {
    name: "December",
    Angel: 2500,
  }
];

const baseURL = "http://localhost:3000/fishPredictions?fishName=Tetra";

export default function ChartScreen() {
  const [fishSpecies, setFishSpecies] = useState([])
  
  React.useEffect(() => {
   axios.get(baseURL).then((response) => {
     setFishSpecies(response.data);
   });
  }, []);
 
  return (
    <div className='container'>
    <h1>{fishSpecies.name}</h1>
    <h2>Predictions</h2>
    <ResponsiveContainer width="90%" aspect={3}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
      <XAxis dataKey="name" tick={{fill:"#fff"}}/>
      <YAxis tick={{fill:"#fff"}} />
      <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
      <Line type="monotone" dataKey="Angel" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
      
    </LineChart>
  </ResponsiveContainer>
</div>
  )
}
