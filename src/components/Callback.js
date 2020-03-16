import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';


const Callback = () => {

    const context = useContext(AuthContext);

    useEffect(() => {
        context.handleAuth();
    }, [context]);
    return (
        <>
        </>
    );
}

export default Callback;