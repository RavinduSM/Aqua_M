import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'

export default function FarmerRoute({component: Component, ...rest})  {
 const userSignin = useSelector((state) => state.userSignin);
 const {userData} = userSignin;
 return(
     <Route {...rest}
     render = {(props) => 
     userData && userData.isFarmer ? (
         <Component {...props}></Component>
     ) : (
         <Redirect to="/signin" />
     )
     }>
     </Route>

  )
}
