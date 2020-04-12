import React, { useEffect, useContext } from 'react';
import history from './history';
import { AuthContext } from '../context/auth-context';

const AuthCheck = () => {

    const context = useContext(AuthContext);
    const { dispatch } = context;

    useEffect(() => {
        if(context.authObj.isAuthenticated()) {
            dispatch({type:"AUTHENTICATE_SUCCESS"});
            history.replace('/dashboard');
        }
        else {
            dispatch({type:"AUTHENTICATE_FAIL"});
            history.replace('/login');
        }
    });

    return (
        <>
        </>
    );
};

export default AuthCheck;