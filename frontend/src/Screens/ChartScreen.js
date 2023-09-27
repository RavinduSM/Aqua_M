import React, {useEffect, useState} from 'react'
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Legend, AreaChart } from 'recharts';





export default function ChartScreen() {
  const[data, setData] = useState([]);
  const[fishspecies, setFishSpecies] = useState('');

  

    useEffect(() => {
      const fetchApi = async() =>
       {
        fetch("http://localhost:4000/fishPredictions?fishName=Angel")
        .then((res) => res.json())
        .then((json) => setData(json))
        .then((j) => console.log(j))
       }
       fetchApi();
    }, [fishspecies])
  
  return (
    <div className='container'>
    
    <h2>Predictions</h2>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" onClick={() => setFishSpecies('Angel')}>Angel</button>
      <button type="button" class="btn btn-primary" onClick={() => setFishSpecies('Guppy')}>Guppy</button>
      <button type="button" class="btn btn-primary" onClick={() => setFishSpecies('Molly')}>Molly</button>
      <button type="button" class="btn btn-primary" onClick={() => setFishSpecies('Platy')}>Platy</button>
    </div>
    
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
      {/* <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/> */}
      <XAxis dataKey="Date" />
      <YAxis tick={{fill:"#fff"}} />
      <Tooltip  cursor={false}/>
      <Legend />
      <Line type="monotone" dataKey="PredictedDemand" stroke="#0095FF" strokeWidth="2" dot={{fill:"#0095FF",stroke:"#0095FF",strokeWidth: 2,r:3}}  />
      <Line type="monotone" dataKey="PredictedSupply" stroke="#FF0000" strokeWidth="2" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:3}}  />
    </LineChart>
  </ResponsiveContainer> 
  )
    
    </div>
)
}
