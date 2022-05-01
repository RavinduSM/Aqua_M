import React from 'react';

export default function stockScreen() {
  return (
    <div className='home'>
      <div className="productList">
      <table className="table table-bordered">
        <thead className='table-success'>
            <tr>
                <th scope="col"> Stock Id</th>
                <th scope="col"> Fish Species </th>
                <th scope="col"> Quantity </th>
                <th scope="col"> Price </th>
                <th scope="col"> Size</th>
                <th scope="col"> Details</th>
                <th scope="col"> Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope ="row" > 1 </th>
                <td>Zebrafish</td>
                <td> 200</td>
                <td> Rs 20</td>
                <td> 2cm </td>
                <td> full grown </td>
                <td>actions</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

