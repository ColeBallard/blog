import React from 'react';
import Head from 'next/head';
import { Box, Container, ThemeProvider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Navbar from '../components/navbar';

const useStyles = makeStyles(theme => ({
  navbarGap: {
    marginTop: '88px',
    [theme.breakpoints.down(600)]: {
      marginTop: '80px'
    }
  }
}));

export default function App({ Component, pageProps }) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
        'sans-serif'
      ],
      h6: {
        fontWeight: 600
      }
    },
    palette: {
      primary: {
        main: '#27242a',
        contrastText: '#fff'
      },
      secondary: {
        main: '#687176',
        contrastText: '#fff'
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>blog</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        <Box className={classes.navbarGap} />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
