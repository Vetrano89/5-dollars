import React from 'react';
import DialogWrapper from './dialog-wrapper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  body: {
    overflow: 'auto'
  }
}));

export const ProofLinkModal = ({ proofLinks, ...rest }) => {
  const classes = useStyles();

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
            <img alt='Payment proof' key={proofLink} src={proofLink} style={{overflow: 'auto'}} />
          )}
        </div>
      </div>
    </DialogWrapper>
  );
}
