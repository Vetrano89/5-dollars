import React from 'react';
import DialogWrapper from './dialog-wrapper';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ContactPage from './contact-page';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  body: {
    overflow: 'auto'
  }
}));

export const ContactFormModal = ({ ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <DialogWrapper {...rest}>
      <ContactPage {...rest} />
    </DialogWrapper>
  );
}
