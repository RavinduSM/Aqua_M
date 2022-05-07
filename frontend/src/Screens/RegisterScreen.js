import React, { useEffect, useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import pic from '../images/register.jpg';


function RegisterScreen(props) {

  const[email,setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [address, setAddress] =useState('');
  const [telephone, setTelephone] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);
  const [isExporter, setIsExporter] = useState(false);

  const buttonHandler = () => {
    setIsFarmer(current => !current)
  }
  const buttonexport = () => {
    setIsExporter(current =>!current)
  }

  const redirect = props.location.search ?
    props.location.search.split('=')[1] :
    '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userData, loading, error} = userRegister;
  

  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords doesn't match")
    } else {
      dispatch(register(name, email, password, address, telephone, isFarmer, isExporter));
    }   
  }

  useEffect(() =>{
    if(userData){
      props.history.push(redirect);
    }
  }, [props.history, redirect, userData]);

  return ( 
    <div className="container">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                {/* <img src={pic} className="img-fluid" />    */}
                </div>
                <div class="col-md-8 col-lg-6">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h3 class="login-heading mb-4">Welcome!</h3>
        
        <form onSubmit={submitHandler}>
          <div>
            {loading && <Loading/>}
            {error && <Message variant="danger">{error}</Message>}
          </div>
           <div className="form-floating m-3 ">
              <input type="text" className="form-control" id="floatingInput" placeholder="name" 
                required onChange={(e) => setName(e.target.value)}/>
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating m-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="email"
                required onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating m-3">
              <input type="password" className="form-control" id="floatingInput" placeholder="Password"
                required onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="floatingInput">Password</label>
            </div>
            <div className="form-floating m-3">
              <input type="password" className="form-control" id="floatingInput" placeholder="ConfirmPassword"
                required onChange={(e) => setConfirmPassword(e.target.value)} />
              <label htmlFor="floatingInput">Confirm Password</label>
            </div>
      

             <div className="form-floating m-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="address"
                  required onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor="floatingInput">Address</label>
              </div>
              <div className="form-floating m-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="telephone"
                required onChange={(e) => setTelephone(e.target.value)} />
              <label htmlFor="floatingInput">Telephone</label>
            </div>
            <input type="radio" onClick={buttonHandler} id="isFarmerbtn"/> Farmer
            <input type="radio" onClick={buttonexport} id="isExporterbtn"/> Exporter
            
            <div className="float-right">
              <button type="submit"  className="btn btn-primary" > Register </button>
            </div>
            <div> 
              Have an account? <Link to='/signin'> Have an account </Link>
            </div>

          </form>
        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
     
  );
}

export default RegisterScreen;
//{`/signin?redirect={redirect}`}