// @flow

import React from 'react';

type ErrorMessagePropTypes = {
  message: string
};

const ErrorMessage = ({ message }: ErrorMessagePropTypes) =>
    <p className="error">{message}</p>;

export default ErrorMessage;
