import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userDetail } from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import pic from '../images/a.jpg';

export default function Profile(props) {
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const userDetails = useSelector((state)=>state.userDetails);
  const {loading, error, user} = userDetails;

  useEffect (() => {
    dispatch(userDetail(userId));
  }, [dispatch, userId]);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
           <div className="col-12 col-sm-6 col-md-4">
             <img src={user.image} className="img-fluid" alt={user.name} />
           </div>
           <div className="col-sm-6">
             <h1>{user.name}</h1>                      
           </div>
          </div>
        </div>
         )}
         </div>
  );
}
