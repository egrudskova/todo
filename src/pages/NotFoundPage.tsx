import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Button, Container, Grid2 as Grid, Typography } from '@mui/material';

export const NotFoundPage = (): React.JSX.Element => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container maxWidth={'md'} sx={{ mt: 10, mb: 10 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Alert severity="error">
            <AlertTitle>Page Not Found</AlertTitle>
            <Typography variant="body1"> The page you are looking for does not exist.</Typography>
          </Alert>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button variant="contained" component={Link} to="/">
            Go back to the homepage
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
