import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import Cookies from 'js-cookie';
import '../utils/styles.css';

const clientId =
  '239769752632-1t40qnudrsfjfajht7v2i4le2437m67c.apps.googleusercontent.com';

const { LoginContextProvider, LoginContextConsumer }  = React.createContext();


const Login=(routeProps) => {
  const onSuccess = (res) => {
    routeProps.setLoggedIn(true);
    console.log(Cookies.get('login'));
    Cookies.set('login', true);
    console.log(Cookies.get('login'));
    Cookies.set('email', res.profileObj.email);
    Cookies.set('name', res.profileObj.name);
    Cookies.set('imageUrl', res.profileObj.imageUrl);

    console.log('Login Success: currentUser:', res.profileObj);
    window.location.href="/myaccount";
    refreshTokenSetup(res);
    
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login`
    );
  };

 

  return (
    <div class="container">

    <center><h1>Login</h1></center>
      
      <center> 
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ display:'block' }}
            isSignedIn={true}
          >
          </GoogleLogin>
        </div>
      </center>
    </div>
  );
}

// export { Login ;

export default Login;