import React, { useEffect } from 'react';
import Users from '../components/Users';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../actions/userActions';


export default function FarmerList() {
  const dispatch = useDispatch();
 const userList = useSelector((state) => state.userList);
 const {loading, error, users} = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch])
  return (
    <div>
      { loading ? (
        <Loading/>
      ): error ?
      (<Message variant="danger">{error}</Message>
      ):(
        <div className="row">
          {
              users
              .filter( (user) => user.isFarmer === true)
              .map((user) => (
                <Users key={user._id} user={user}/>
              ))
          }
        </div>
      )
      }
    </div>  
  );
}
