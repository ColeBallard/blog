import React from 'react';
import GoogleLogin from 'react-google-login';

const Landing = () => {
  const login = res => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={login}
        onFailure={login}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Landing;