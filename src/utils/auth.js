import history from './history';


export default class Authorize{

    login = (username, password) => {
        history.replace("/callback");
    }

    handleAuth = () => {
        history.replace('/authcheck');
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        if(expiresAt != null){
            return new Date().getTime() < expiresAt;    
        }
        return false;
    }

    logout = () => {
        history.replace('/authcheck')
    }
}