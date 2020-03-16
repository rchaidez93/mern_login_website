import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { AuthProvider } from './context/auth-context';

const MainApp = props => {
    return(
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));