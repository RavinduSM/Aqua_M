import React, { useEffect, useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';


function SignIn(props) {

  const[email,setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const redirect = props.location.search ?
    props.location.search.split('=')[1] :
    '/';

    const userSignin = useSelector((state) => state.userSignin);
    const {userData, loading, error} = userSignin;
  

  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(signin(email, password));
  }

  useEffect(() =>{
    if(userData){
      props.history.push(redirect);
    }
  }, [props.history, redirect, userData]);

  return (
    <div className="row g-0">
      <div className="col-sm-6">
        <h1>Hello Signin</h1>
      </div>
      <div className="col-sm-6">
        <h1> Login </h1>
        <div>
          {loading && <Loading/>}
          {error && <Message variant="danger">{error}</Message>}
        </div>
        <form onSubmit={submitHandler}>
          <div className="form-floating m-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
              required onChange={(e) => setEmail(e.target.value)}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating m-3">
            <input type="password" className="form-control" id="floatingInput" placeholder="Password"
              required onChange={(e) => setPassword(e.target.value)} />
            <label for="floatingInput">Password</label>
          </div>
          
          <div className="float-right">
            <button type="submit"  className="btn btn-primary" > Login </button>
          </div>
          <div> 
            New Customer? <Link to='/register'> Create an account </Link>
          </div>
        </form>
      </div>
    </div>   
  );
}

export default SignIn;
