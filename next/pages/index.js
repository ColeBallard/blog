import Head from 'next/head';
import { Container } from '@material-ui/core';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
    </Container>
  )
}
