import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserRoute({component: Component, ...rest}) {
 const userSignin = useSelector((state) => state.userSignin);
 const {userData} = userSignin;
 return(
     <Route
        {...rest}
        render={(props) =>
        userData ? (
            <Component {...props}></Component>
        ): (
            <Redirect to="/signin" />
        )
    }
    ></Route>
 )
}


