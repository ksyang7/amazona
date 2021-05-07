import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export default function AdminRoute({component: component, ...rest}) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <Route {...rest} render = {(props) => userInfo && userInfo.userAdmin
            ? ( <Component {...props}></Component>)
            : (
                <Redirect to="/signin"/>
            )
        }></Route>
    )
}
