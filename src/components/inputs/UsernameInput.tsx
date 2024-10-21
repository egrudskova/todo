import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UsernameInput = (): React.JSX.Element => {
  const storedUserName = localStorage.getItem('username');
  const [username, setUsername] = useState<string>(storedUserName ?? '');
  const navigate = useNavigate();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setUsername(evt.target.value);
  };

  const handleSubmit = (): void => {
    localStorage.setItem('username', username);
    navigate('/todos');
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      {!storedUserName && (
        <>
          <Typography variant="body1" gutterBottom>
            Enter your name:
          </Typography>
          <TextField
            label="Username"
            value={username}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </>
      )}
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        {storedUserName ? 'Continue' : 'Start'} adding todos
      </Button>
    </>
  );
};
