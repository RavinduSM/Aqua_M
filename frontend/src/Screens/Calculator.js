import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tankRegister } from '../actions/tanksActions';

export default function Calculator() {
   const [length1, setLength1] = useState(0);
   const [length2, setLength2] = useState(0);
   const [fishLength, setFishLength] = useState(0);
   const [fishName, setFishName] = useState('');
   const [fishCal, setFishCal] = useState( 0);

   function calculation() {
    
       
     if(fishLength>6){
        setFishCal(Math.floor((length1 * length2)/ (fishLength * 50)));
     } else{
        setFishCal(Math.floor((length1 * length2)/(fishLength * 30)));
       }       
      }    
      
   
      const dispatch = useDispatch();

      const submitHandler = (e) => {
          e.preventDefault();
          dispatch(tankRegister(fishName));
      }
    
  return (
    <div className="container">
       
    <div className='row-fluid'>
        <div className="card m-3">
            <div className="row g-0">
            <form onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className="form-floating m-2">
                        <input 
                            type="number" className='form-control' 
                            id='length'  
                            value={length1}                          
                            onChange = {(e) => setLength1(+e.target.value)} 
                            placeholder='length' 
                        />
                        <label htmlFor="length">Tank length in cm</label>
                    </div>    
                    <div className="form-floating m-2">
                        <input 
                            type="number" className='form-control' 
                            id='length'
                            value={length2}
                            onChange = {(e) => setLength2(+e.target.value)} 
                            placeholder='length2' 
                        />
                        <label htmlFor="length2">Tank length in cm </label>
                    </div>                 
                </div>
                <div className="col-md-6">
                    <div className="form-floating m-2">
                        <input type="text" 
                            className='form-control' 
                            id='fishspecies' 
                            value={fishName}
                            onChange = {(e) => setFishName(e.target.value)} 
                            placeholder='fishspecies' 
                        />
                        <label htmlFor="fishspecies">Fish species </label>                        
                    </div> 
                    <div className="form-floating m-2">
                        <input 
                            type="number" className='form-control' 
                            id='fishincm' 
                            value={fishLength}
                            onChange = {(e) => setFishLength(+e.target.value)} 
                            placeholder='fishincm' 
                        />
                        <label htmlFor="fishincm">Fish size in cm </label>                        
                    </div>    

                    <div className="d-grid d-flex justify-content-end m-2">
                        <button className='btn btn-primary rounded m-2' type='button' onClick={calculation} > Calculate </button>    
                        <button className='btn btn-primary rounded m-2' type='submit'> Add Tank </button>  
                    </div> 
                    
                </div>
                <p>Number of fish support {fishCal}</p>
                </form>
            </div>
            
        </div>
      <table className="table table-info table-striped m-4">
        <thead>
            <tr>
                <th scope="col"> Tank ID</th>
                <th scope="col"> Tank size</th>
                <th scope="col"> Fish species </th>
                <th scope="col"> Size of the fish</th>
                <th scope="col"> Quantity tank support</th>
                <th scope="col"> Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope ="row" > 1 </th>
                <td> 3600 cm²</td>
                <td>Zebrafish</td>
                <td>4 cm</td>
                <td>50 fishes</td>
                <td>actions</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}
