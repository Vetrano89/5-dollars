import React from 'react';
import DialogWrapper from './dialog-wrapper';

import ContactPage from './contact-page';

export const ContactFormModal = ({ ...rest }) => {

  return (
    <DialogWrapper {...rest}>
      <ContactPage {...rest} />
    </DialogWrapper>
  );
}
