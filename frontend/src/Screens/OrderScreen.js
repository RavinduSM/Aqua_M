import React from 'react';

export default function OrderScreen() {
  return (
    <div className='container'>

    <h1 className='m-3'>Order Details</h1>
      <table className="table table-bordered">
        <thead className='table-success'>
            <tr>
                <th scope="col"> Order Id</th>
                <th scope="col"> Fish Species </th>
                <th scope="col"> Quantity </th>
                <th scope="col"> Price </th>
                <th scope="col"> Requesting date</th>
                <th scope="col"> Exporter Name </th>
                <th scope="col"> Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope ="row" > 1 </th>
                <td>Zebrafish</td>
                <td> 200</td>
                <td> Rs 2000</td>
                <td>09/04/2022</td>
                <td> Ravindu </td>
                <td>actions</td>
            </tr>
        </tbody>
      </table>
      
    </div>
  );
}

