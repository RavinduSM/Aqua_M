import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMessage } from '../actions/messageActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { MESSAGE_SEND_REQUEST, MESSAGE_SEND_REST, MESSAGE_SEND_SUCCESS } from '../constants/messageConstants';

export default function Contact() {
    const[name, setName]=useState('');
    const[email, setEmail] = useState('');
    const[tele, setTele] = useState('');
    const[msg, setMsg] = useState('');

    const messageSend = useSelector((state) => state.messageSend);
    const {success, loading, error} = messageSend;
   
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addMessage(name, email, tele, msg));
    }

    useEffect(() =>{
        if(success){
            dispatch({type: MESSAGE_SEND_REST});
            alert("Msg Sent")
        }
      }, [dispatch, success]);
  return (
    <div className='container'>
        <div>
            <div className="card md-mx-auto md-mw-75">
                <div className='row g-0'>
                <div className="col-md-6">
                <div class="container-fluid">
                    <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.40347285619!2d79.86396245085092!3d7.120154020929794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f04b26548265%3A0x13f8db11448f6d64!2sSeeduwa%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1647497173701!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={submitHandler}>
                    <div>
                        {loading && <Loading/>}
                        {error && <Message variant="danger">{error}</Message>}
                        {success && <Message variant="success">{success}</Message>}
                    </div>
                        
                        <div className='form-floating m-3'>
                            <input type="text" className='form-control' id='floatingInputValue' placeholder='name'
                            required onChange={(e)=> setName(e.target.value)} />
                            <label for="floatingInputValue"> Name </label>
                        </div>    
                        <div className='form-floating m-3'>
                            <input type="email" className='form-control' id='email' placeholder='Email' 
                            required onChange={(e)=> setEmail(e.target.value)} />
                            <label for="floatingInputValue"> Email </label>
                        </div>  
                        <div className='form-floating m-3'>
                            <input type="tel" className='form-control' id='tele' placeholder='Tele'
                            required onChange={(e)=> setTele(e.target.value)} />
                            <label for="floatingInputValue"> Tele </label>
                        </div> 
                        <div className='form-floating m-3'>
                            <textarea className='form-control' id='msg' placeholder='Msg' 
                            required onChange={(e)=> setMsg(e.target.value)} />
                            <label for="floatingInputValue"> Message </label>
                        </div>    
                        <div className="justify-content-md-end">
                            <button type="submit" class="btn btn-success">Send</button>     
                        </div>                              
                    </form>
                </div>
                </div>
            </div>      
        </div>
        
    </div>
  );
}
