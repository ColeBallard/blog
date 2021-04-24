import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, InputBase } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    background: '#27242a',
    color: '#fff',
  },
  search: {
    position: 'absolute',
    right: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down(300)]: {
      width: '70%'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  moonIcon: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down(360)]: {
      display: 'none'
    }
  },
  title: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down(470)]: {
      display: 'none'
    }
  },
  listItem: {
    fontWeight: 700,
    textAlign: 'center'
  }
}));

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" onClick={toggleDrawer('left', true)}>
          <Menu style={{ color: 'white' }} />
        </IconButton>
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} classes={{ paper: classes.paper }}>
          <List>
            <Link href='/'>
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemText primary="home" classes={{ primary: classes.listItem }} />
              </ListItem>
            </Link>
            <Link href='/categories'>
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemText primary="categories" classes={{ primary: classes.listItem }} />
              </ListItem>
            </Link>
            <Link href='/about'>
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemText primary="about" classes={{ primary: classes.listItem }} />
              </ListItem>
            </Link>
            <Link href='/login'>
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemText primary="login" classes={{ primary: classes.listItem }} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <div className={classes.moonIcon}>
          <Image src="/moon.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        </div>
        <Typography variant='h6' className={classes.title}>blog.coleb</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}