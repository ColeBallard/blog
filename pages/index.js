import { Container, Grid } from '@material-ui/core';
import HomeCard from '../components/homeCard'

export default function Index() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HomeCard />
        </Grid>
        <Grid item xs={12}>
          <HomeCard />
        </Grid>
        <Grid item xs={12}>
          <HomeCard />
        </Grid>
      </Grid>
    </Container>
  )
}
