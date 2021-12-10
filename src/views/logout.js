import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Cookies from 'js-cookie'; 

const clientId =
  '239769752632-1t40qnudrsfjfajht7v2i4le2437m67c.apps.googleusercontent.com';

function Logout(routeProps) {
  const onSuccess = () => {
    routeProps.setLoggedIn(false);
    console.log(Cookies.get('login'))
    Cookies.remove('login')
    Cookies.remove('name')
    Cookies.remove('email')
    Cookies.remove('imageUrl')
    console.log(Cookies.get('login'))
    Cookies.set('login', false);
    console.log(Cookies.get('login'))
    console.log('Logout success');
    alert('Logout success');
  };

  return (
    <div class="container">
    <center><h1>Logout</h1></center>
      <center> 
        <div>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          ></GoogleLogout>
        </div>
      </center>
    </div>
  );
}

export default Logout;