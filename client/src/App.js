import React from 'react';
import Landing from './components/Landing';
import CNavbar from './components/CNavbar';
import Blog from './components/Blog';
import { useSelector } from 'react-redux';
import { selectSignedIn } from './features/userSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div id='app'>
      <CNavbar />
      <Landing />
      {isSignedIn && <Blog />}
    </div>
  );
};

export default App;