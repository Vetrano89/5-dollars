import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  header: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
}));

const DialogWrapper = ({ title, onClose, showModal, maxWidth, label, dividers, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={showModal}
      aria-labelledby={label}
      aria-describedby={label}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={maxWidth || "md"}
    >
      {!!title && (
        <DialogTitle disableTypography id="customized-dialog-title" onClose={onClose} className={classes.header}>
          {title}
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      {!title && (
        <DialogTitle disableTypography id="customized-dialog-title" onClose={onClose}>
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent dividers={dividers}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DialogWrapper;
