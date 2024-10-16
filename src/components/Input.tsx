import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks.ts';
import { addTodo } from '../features/todo/todosSlice.ts';
import { v4 as uuidv4 } from 'uuid';

const Input = (): React.JSX.Element => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputText(evt.target.value);
  };

  const addNewTodo = (): void => {
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
        placeholder="What needs to be done?"
        onKeyUp={handleKeyUp}
      />
      <Button variant="contained" onClick={addNewTodo}>
        Add
      </Button>
    </Stack>
  );
};

export { Input };
