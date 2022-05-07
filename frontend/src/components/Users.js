import React from 'react';
import { Link } from 'react-router-dom';

export default function Users(props) {
    const {user} = props;
  return (
      <div className="col-12 col-sm-4">
        <div className="card  border-shadow rounded mb-3" key={user._id}>
                        {/* <Link to={`/user/${user._id}`}>
                            <img src={user.image} className="product-img" alt={user.name} />
                        </Link>     */}
                <div className="card-body">
                        {/* <Link to={`/user/${user._id}`}> */}
                            <h2 className="card-title text-decoration-none text-success" >{user.name}</h2>                            
                        {/* </Link>  */}
                        <p class="card-text">Tele: {user.telephone}</p>
                        <p class="card-text">Email: {user.email}</p>    
                        <p class="card-text"> Address:{user.address}</p>                  
                </div>         
            </div>            
      </div>
    
  );
}
