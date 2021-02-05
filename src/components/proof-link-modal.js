import React from 'react';
import DialogWrapper from './dialog-wrapper';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  body: {
    overflow: 'auto'
  }
}));

export const ProofLinkModal = ({ proofLinks, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const title = (
    <>
      <Typography component="h2" variant="h5">
        Payment Proof Receipt
      </Typography>
      <Typography variant="caption" id="simple-modal-description">
        Drag or scroll to see the full payment receipt
      </Typography>
    </>
  )

  return (
    <DialogWrapper title={title} {...rest}>
      <div>
        <div className={classes.body}>
          {proofLinks.map(proofLink =>
            <img key={proofLink} src={proofLink} style={{overflow: 'auto'}} />
          )}
        </div>
      </div>
    </DialogWrapper>
  );
}
