import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

export const WelcomePage = (): React.JSX.Element => {
  const storedUserName = localStorage.getItem('userName');
  const [userName, setUserName] = useState<string>(storedUserName ?? '');
  const navigate = useNavigate();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setUserName(evt.target.value);
  };

  const handleSubmit = (): void => {
    localStorage.setItem('userName', userName);
    navigate('/todos');
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Container
      onKeyUp={handleKeyUp}
      maxWidth="sm"
      sx={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome {storedUserName && `back, ${storedUserName}`}
      </Typography>
      {!storedUserName && (
        <>
          <Typography variant="body1" gutterBottom>
            Enter your name:
          </Typography>
          <TextField label="Username" value={userName} onChange={handleChange} fullWidth margin="normal" />
        </>
      )}
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        {storedUserName ? 'Continue' : 'Start'} adding todos
      </Button>
    </Container>
  );
};

export default WelcomePage;
