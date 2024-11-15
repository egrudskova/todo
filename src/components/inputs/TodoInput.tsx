import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '@/store';
import { addTodo } from '@/features';
import { AppSnackbar } from '@/components/snackbar';

export const TodoInput = (): React.JSX.Element => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputText(evt.target.value);
  };

  const handleSnackVisibilityChange = (isVisible: boolean): void => {
    setIsSnackbarVisible(isVisible);
  };

  const addNewTodo = (): void => {
    if (inputText.trim().length === 0) {
      handleSnackVisibilityChange(true);
      return;
    }
    dispatch(addTodo({ text: inputText, id: uuidv4(), isEdited: false, isCompleted: false }));
    setInputText('');
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (evt.key === 'Enter') {
      addNewTodo();
    }
  };

  return (
    <Stack direction={'row'} padding={1} spacing={1}>
      <TextField
        aria-label="Todo"
        style={{ flex: 1 }}
        value={inputText}
        onChange={handleInputChange}
        label="What needs to be done?"
        onKeyUp={handleKeyUp}
      />
      <Button variant="contained" onClick={addNewTodo}>
        Add
      </Button>
      <AppSnackbar
        handleVisibilityChange={handleSnackVisibilityChange}
        isVisible={isSnackbarVisible}
        message="Cannot add empty todo, please add something to your todo"
      />
    </Stack>
  );
};
