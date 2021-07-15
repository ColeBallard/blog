import Link from 'next/link';
import { Container, TextField, Button } from '@material-ui/core';
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
  linkText: {
    '&:hover': {
      backgroundColor: 'grey'
    },
    fontSize: '1.5ch',
    fontFamily: [
      'Nunito Sans',
      'sans-serif'
    ],
  }
}));

export default function CreateAccount() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TextField id="name" label="Name" variant="outlined" className={classes.textField} />
      <TextField id="email" label="Email" variant="outlined" className={classes.textField} />
      <TextField id="password" label="Password" type="password" variant="outlined" className={classes.textField} />
      <Button>Create Account</Button>
      <Link href='/login'>
        <p className={classes.linkText}>Already have an account? Login.</p>
      </Link>
    </Container>
  )
}