import React, { useReducer } from 'react'
import userReducer from '../reducers/AuthReducer';
import Authorize from '../utils/auth';

export const AuthContext = React.createContext();


const auth = new Authorize();

const user = {
    authenticated: auth.isAuthenticated(),
};

function AuthProvider(props) {
    const {children} = props;
    const [state, dispatch] = useReducer(userReducer, user);

    const handleAuthentication = (props) => {
        auth.handleAuth();
    }

    return(
        <AuthContext.Provider 
            value={{
                state,
                dispatch,
                handleAuth: (props) => handleAuthentication(props),
                authObj: auth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };