import React from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { Alert, AlertTitle, Button, Container, Typography } from '@mui/material';

export const ErrorPage = (): React.JSX.Element => {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, an unexpected error has occurred. If the error persists, please report the problem
      </Typography>
      <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
        <AlertTitle>Error Details</AlertTitle>
        {errorMessage}
      </Alert>
      <Button variant="contained" component={Link} to="/">
        Go back to the homepage
      </Button>
    </Container>
  );
};
