import React from 'react';

import Button from './Button';

export default (props) => (
  <Button
    onClick={() => props.increment()}
    disabled={props.isLoading}
  >
    +
  </Button>
);
