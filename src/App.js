import React from 'react';
import Landing from './components/Landing';
import CNavbar from './components/CNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

const App = () => {
  return (
    <div id='app'>
      <CNavbar />
      <Landing />
    </div>
  );
};

export default App;