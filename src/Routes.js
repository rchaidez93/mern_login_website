import React, { useContext } from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './context/auth-context';
import history from './utils/history';
import AuthCheck from './utils/authcheck';
import Callback from './components/Callback';

const PrivateRoute = ({component: Component, auth }) => (
    <Route 
    render={props => auth === true
      ? <Component auth={auth} {...props} />
      : <Redirect to={{pathname:'/login'}} />
    }
    />
)

const Routes = () => {
    const context = useContext(AuthContext);
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path='/authcheck' component={AuthCheck} />
                <PrivateRoute 
                    path="/dashboard"
                    auth={context.state.authenticated}
                    component={Dashboard}
                />
                <Route path='/callback' component={Callback} />
                />
            </Switch>
        </Router>
    );
}

export default Routes;