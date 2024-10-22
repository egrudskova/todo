import React from 'react';
import { Snackbar } from '@mui/material';
import { SnackbarProps } from './Snackbar.types.ts';

export const AppSnackbar = ({ message, isVisible, handleVisibilityChange }: SnackbarProps): React.JSX.Element => {
  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={2000}
      onClose={() => {
        handleVisibilityChange(false);
      }}
      message={message}
    />
  );
};
