import {useEffect, useState} from "react"

function Test(){
    const[data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/fishPredictions?fishName=Angel")
        .then((res) => res.json())
        .then((json) => setData(json))
        .then((j) => console.log(j))
    }, )
    return(
        <div className="container">
            {data.map((post)=>(
                <li>{post.Type}</li>
            ))}
        </div>
    )
}

export default Test;