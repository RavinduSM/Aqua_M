import React from 'react';

export default function Users(props) {
    const {user} = props;
  return (
      <div className="container">
      <div className="row">
        <div  className='col-sm-6'>
            <div className="card shadow" key={user._id}>
                        <a href={`/user/${user._id}`}>
                            <img src={user.image} className="product-img" alt={user.name} />
                        </a>    
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <ul class="list-group list-group-flush">
                        <li>An item</li>
                        <li>A second item</li>
                        <li>A third item</li>
                    </ul>
                </div>         
            </div>      
        </div>       
      </div>
      </div>
  );
}
