import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, selectUserData, setSearchInput, setSignedIn, setUserData } from '../features/userSlice';

import { Button, Container, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';

import '../styles/cnavbar.css';
import { GoogleLogout } from 'react-google-login';

const CNavbar = () => {
  const [inputValue, setSearchInput] = useState('tech');

  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = res => {
    dispatch(setUserData(null));
    dispatch(setSignedIn(false));
  }

  return (
    <Navbar 
      collapseOnSelect 
      id='navbar'
      bg='dark' 
      variant='dark' 
      expand='md'
    >
      <Container className='d-flex' id='navbar-container'>
        <Image src='moon.png' id='navbar-icon' roundedCircle />
        <Navbar.Brand>blog.coleb</Navbar.Brand>
        {isSignedIn && 
          <Fragment>
            <Navbar.Toggle id='navbar-toggle' aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Form className='d-flex' id='search-bar'>
                <FormControl
                  type='search'
                  placeholder='Choose a keyword..'
                  className='mr-2'
                  aria-label='Search'
                  onChange={e => setSearchInput(e.target.value)}
                />
                <Button variant='outline-primary' /*onClick={handleSearch}*/>Search</Button>
              </Form>
              <Nav
                className='mr-auto my-lg-0'
                id='collapsed-nav'
                navbarScroll
              >
                <Nav.Link id='profile-link' href='#action0'>
                  <Image src={userData?.imageUrl} id='user-icon' roundedCircle /> {userData?.givenName}
                </Nav.Link>
                <GoogleLogout  
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={renderProps => (
                    <Nav.Link
                      id='logout-btn'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Logout
                    </Nav.Link>
                  )} 
                  onLogoutSuccess={logout}
                />
              </Nav>
            </Navbar.Collapse>
          </Fragment>
        }
      </Container>
    </Navbar>
  );
};

export default CNavbar;