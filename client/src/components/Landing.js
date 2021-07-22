import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import '../styles/landing.css';

const Landing = () => {
  const dispatch = useDispatch();

  const login = res => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  const getGoogleClientId = async () => {
    const res = await fetch('/api/googleid');
    const body = await res.json();

    if (res.status !== 200) throw Error(body.message);
    return body.id;
  };

  return (
    <div>
      {!isSignedIn && (
        <div id='container'>
          <div id='title'>
            Welcome to my blog, please sign in to continue.
          </div>
          <GoogleLogin
            id='login-button' 
            clientId={getGoogleClientId}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
          <div id='footer'>
            <a href='https://www.coleb.io/' target='_blank' rel='noreferrer' id='website-link'>Here's my website.</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;