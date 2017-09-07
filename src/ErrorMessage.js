// @flow

import React from 'react';
import { Text } from 'react-native';

type ErrorMessagePropTypes = {
  message: string
};

const ErrorMessage = ({ children }: ErrorMessagePropTypes) =>
    <Text>{children}</Text>;

export default ErrorMessage;
