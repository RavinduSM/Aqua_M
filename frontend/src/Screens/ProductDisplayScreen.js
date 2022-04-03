import React from 'react';

export default function ProductDisplayScreen() {
  return (
      <div className="container">
         <table className="table table-info table-striped ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col"> Fish Species </th>
                        <th scope="col"> Size </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"> Price </th>
                        <th scope="col"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Zebra</td>
                        <td>5 cm</td>
                        <td>3000</td>
                        <td>Rs 10</td>
                        <td>
                        <div className="d-grid d-flex ">
                            <button className='btn btn-primary rounded m-2' type='button' > Edit </button>    
                            <button className='btn btn-primary rounded m-2' type='submit'> Delete </button>  
                        </div> 
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
      
  );
}
