import { Container, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    width: '50%',
  },
  textField: {
    width: '100%',
    marginBottom: '2ch'
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TextField id="email" label="Email" variant="outlined" className={classes.textField} />
      <TextField id="password" label="Password" type="password" variant="outlined" className={classes.textField} />
      <Button>Login</Button>
    </Container>
  )
}