import React from 'react';
import { Adsense } from '@ctrl/react-adsense';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import StarIcon from '@material-ui/icons/StarBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';

import { ProofLinkModal } from './proof-link-modal';
import { ContactFormModal } from './contact-form-modal';

import { tiers } from '../data/tiers';
import { Event } from '../analytics/event.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      © {new Date().getFullYear()}
    </Typography>
  );
}

// const seeTheme = makeStyles((theme) => {
//   console.log(theme);
// });

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(4, 1, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  cardPricingContainer: {
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
  },
  proofLinkText: {
    textAlign: 'center',
    marginTop: '3px',
  },
  textDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconWithText: {
    display: 'flex',
    alignItems: 'center',
  },
  actionIcon: {
    color: theme.palette.success[theme.palette.type],
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
];

export default function Pricing() {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalProofLinks, setModalProofLinks] = React.useState([]);
  const [showSentSuccess, setShowSentSuccess] = React.useState(false);
  const classes = useStyles();
  //console.log(seeTheme());

  const onClickHandler = (imageLink, title) => {
    Event("PROOF_LINK", "OPEN", title);
    setShowModal(true);
    setModalProofLinks(imageLink);
  }

  const onClickContactHandler = () => {
    Event("CONTACT_FORM", "OPEN", "");
    setShowContactForm(true);
  }

  const onClickReferralLinkHandler = (title) => {
    Event("REFERRAL_LINK", "OPEN", title);
    setShowContactForm(true);
  }

  return (
    <React.Fragment>
      <ProofLinkModal
        proofLinks={modalProofLinks}
        showModal={showModal}
        onClose={() => setShowModal(false)}
        dividers
      />
      <ContactFormModal
        showModal={showContactForm}
        onClose={() => setShowContactForm(false)}
        successCallback={() => setShowSentSuccess(true)}
        dividers={false}
      />
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={showSentSuccess} autoHideDuration={2000} onClose={() => setShowSentSuccess(false)}>
        <Alert onClose={() => setShowSentSuccess(false)} severity="success" variant="filled">
          Message sent successfully!
        </Alert>
      </Snackbar>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography color="textPrimary" href="#" className={classes.link}>
            Make $5 a day online
          </Typography>
          <div className={classes.iconWithText} onClick={onClickContactHandler}>
            <MailOutlineIcon style={{marginRight: '4px'}} className={classes.link} />
            <Link href="#" style={{marginLeft: '0px'}} className={classes.link}>
              Have Questions? Click here to contact me!
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography variant="subtitle1" align="left" color="textPrimary" component="p">
          &nbsp; &nbsp; &nbsp; Hello! If you stumbled upon this website, you probably have the same goal as me. Earn a little
          extra money online.  I did some research and have been using these sites for several months now and wanted to share
           them with whoever is interested.
        </Typography>
        <div style={{marginBottom: '20px'}} />
        <Typography variant="subtitle1" align="left" color="textPrimary" component="p">
          &nbsp; &nbsp; &nbsp; How do you earn money? Most of the sites just have you filling out surveys, watching videos/ads, etc.
           I usually just do this while watching tv or inbetween tasks at work.
        </Typography>
        <div style={{marginBottom: '20px'}} />
        <Typography variant="subtitle1" align="left" color="textPrimary" component="p">
          &nbsp; &nbsp; &nbsp; Below is the list of sites I currently use to earn extra money.  I've gone through a lot of different
           sites and the ones below are actually real and pay their users (see below).
        </Typography>
        <div style={{marginBottom: '10px'}} />
        <Typography variant="subtitle1" align="left" color="textPrimary" component="p">
          &nbsp; &nbsp; &nbsp; Click on the <InfoIcon style={{transform: 'translateY(6px)'}} className={classes.actionIcon}/> icons
          below for screenshots of "proof of payment" from these sites.  I wouldn't recommend
          using any sites where you haven't seen proof of payment from someone.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (<Grid item key={tier.title} xs={12} sm={12} md={12}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricingContainer} onClick={() => onClickHandler(tier.proofLink, tier.title)}>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.earnings}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /day
                      </Typography>
                    </div>
                    <div className={classes.iconWithText} style={{justifyContent: 'center'}}>
                      <InfoIcon className={classes.actionIcon} style={{marginRight: '4px'}}/>
                      <Typography component="p" variant="caption" className={classes.proofLinkText}>
                        Click here to see proof of payment
                      </Typography>
                    </div>
                  </div>
                  <ul>
                    {tier.description.map((line, i) => (
                      <div key={line}>
                        <Divider className={classes.textDivider} style={{width: i === 0 ? '75%' : '15%'}}/>
                        <Typography component="li" variant="subtitle1" align="center">
                          {line}
                        </Typography>
                      </div>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" target="_blank" href={tier.link} onClick={() => onClickReferralLinkHandler(tier.title)}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={12} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={12} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          Check back for updates! I'll add new sites and hopefully some guides for the current sites.
        </Grid>
        <Box mt={5}>
          <Adsense
            client="ca-pub-1076900117911309"
            slot="2555232141"
            style={{ display: 'block' }}
            layout="in-article"
            format="auto"
            data-adtest="on"
          />
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
