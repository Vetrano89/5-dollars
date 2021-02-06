import React from 'react';
import emailjs from 'emailjs-com';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5, 0, 0, 0),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactPage({onClose, successCallback}) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const [invalidMessage, setInvalidMessage] = React.useState(false);
  const [awaitSendSuccess, setAwaitSendSuccess] = React.useState(false);
  const [sendError, setSendError] = React.useState('');
  const [sendSuccess, setSendSuccess] = React.useState(false);

  const onMessageChangeHandler = (event) => {
    setMessage(event.target.value)
    setInvalidMessage(!event.target.value);
  }

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
    setInvalidEmail(!event.target.value);
  }

  const onEmailBlurHandler = () => {
    setInvalidEmail(!validateEmail(email));
  }

  const onMessageBlurHandler = () => {
    if (!message) {
      setInvalidMessage(true);
    }
    if (!email) {
      setInvalidEmail(true);
    }
  }

  const getEmailError = () => {
    if (!email && invalidEmail) {
      return 'Email required'
    }
    if (invalidEmail) {
      return 'Invalid email'
    }
  }

  const sendMessage = (event) => {
    event.preventDefault();
    setAwaitSendSuccess(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setAwaitSendSuccess(false);
        setSendSuccess(true);
        exitModalOnSuccess();
        return false;
      })
      .catch(() => {
        setSendError('Could not send email, please try again.')
        return false;
      })
    return false;
  }

  const exitModalOnSuccess = () => {
    setTimeout(() => {
      successCallback();
      onClose();
    }, 200);
  }

  return (
    <Container component="main" maxWidth="xs" style={{height: '100%'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact me
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendMessage}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="First name"
                name="name"
                autoComplete="fname"
                onChange={onNameChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={getEmailError()}
                onChange={onEmailChangeHandler}
                onBlur={onEmailBlurHandler}
                error={invalidEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={6}
                name="message"
                label="Message"
                type="text"
                id="message"
                placeholder="Write your message here"
                helperText={invalidMessage && "Message required"}
                onChange={onMessageChangeHandler}
                onBlur={onMessageBlurHandler}
                error={invalidMessage}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={invalidEmail || !email || !message}
            endIcon={(awaitSendSuccess || sendSuccess) ? '' : <SendIcon />}
          >
            {awaitSendSuccess && <CircularProgress color="inherit" />}
            {sendSuccess && <ThumbUpIcon />}
            {!sendSuccess && !awaitSendSuccess && 'Send'}
          </Button>
        </form>
        {sendError}
        Thanks for reaching out! I'm glad to answer any and all questions. As
        a guarantee, I don't store any information from this contact (name, email, etc.)
        outside of my own email account that is used to receive the messages.
      </div>
    </Container>
  );
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
