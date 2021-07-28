import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import API from '../app/config';

import '../styles/landing.css';

const Landing = () => {
  const dispatch = useDispatch();

  const login = res => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div>
      {!isSignedIn && (
        <div id='container'>
          <div id='title'>
            Welcome to my blog, please sign in to continue.
          </div>
          <GoogleLogin
            id='login-button' 
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={login}
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