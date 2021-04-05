import React from 'react';
import Head from 'next/head';
import { Container, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from '../components/navbar';

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
        <Container style={{ marginTop: '72px' }} />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
