import { Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TextField id="email" label="Email" variant="outlined" className={classes.textField} />
      <TextField id="password" label="Password" type="password" variant="outlined" className={classes.textField} />
    </Container>
  )
}