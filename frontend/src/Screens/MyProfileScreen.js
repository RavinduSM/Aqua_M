import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsMine, updateUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { USER_PROFILEUPDATE_RESET } from '../constants/userConstants';


export default function MyProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] =useState('');
  const [telephone, setTelephone] = useState('');
  const [image, setImage] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);
  const [isExporter, setIsExporter] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userData } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {success: successUpdate, error: errorUpdate, loading: loadingUpdate,} = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_PROFILEUPDATE_RESET });
      dispatch(detailsMine(userData._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setTelephone(user.telephone);
      setImage(user.image);
      setIsFarmer(user.isFarmer);
      setIsExporter(user.isExporter);
    }
  }, [dispatch, userData._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({userId: user._id, name, email, address, telephone, image}));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
           {loadingUpdate && <Loading></Loading>}
            {errorUpdate && (
              <Message variant="danger">{errorUpdate}</Message>
            )}
            {successUpdate && (
              <Message variant="success">
                Profile Updated Successfully
              </Message>
            )}
            <div className="form-floating m-3">
              <input className='form-control'
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)} />
                 <label for="floatingInput">Name</label> 
            </div>
            
            <div className="form-floating m-3">
              <input className='form-control'
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating m-3">
              <input className='form-control'
                id="address"
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e)=> setAddress(e.target.value)} />
                <label for="floatingInput">Address</label>
            </div>
            <div className="form-floating m-3">
              <input className='form-control'
                id="telephone"
                type="number"
                placeholder="Enter Telephone"
                value={telephone}
                onChange={(e)=> setTelephone(e.target.value)} />
                <label for="floatingInput">Telephone</label>
            </div>
            <div className="form-floating m-3">
              <input className='form-control'
                id="image"
                type="text"
                placeholder="Insert Image"
                value={image}
                onChange={(e)=> setTelephone(e.target.value)} />
                <label for="floatingInput">Image</label>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}