import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material';
import { editTodoText, removeTodo, toggleTodoIsCompleted, toggleTodoIsEdited } from '../../features';
import { Delete, Edit } from '@mui/icons-material';
import React, { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { ListItemProps } from './types.ts';
import { StyledButton } from './ListItem.styled.tsx';
import { selectTodoById } from '../../features';

export const ListItem = memo(({ id }: ListItemProps): React.JSX.Element => {
  const todo = useAppSelector((state) => selectTodoById(state, id));
  const { text, isCompleted, isEdited } = todo;
  const [editedText, setEditedText] = useState<string>(text);
  const dispatch = useAppDispatch();

  const handleTextChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setEditedText(evt.target.value);
  };

  const toggleEditMode = (): void => {
    dispatch(toggleTodoIsEdited({ id }));
    if (editedText !== text) {
      dispatch(editTodoText({ id, text: editedText }));
    }
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (evt.key === 'Enter') {
      toggleEditMode();
    }
  };

  const handleDeleteButtonClick = (): void => {
    dispatch(removeTodo({ id }));
  };

  return (
    <Stack direction={'row'} padding={1} spacing={1}>
      <Checkbox
        aria-label={'label ' + text}
        checked={isCompleted}
        onChange={() => {
          dispatch(toggleTodoIsCompleted({ id }));
        }}
      />
      {isEdited ? (
        <TextField
          autoFocus
          label="Press enter or edit button to save changes"
          variant="standard"
          value={editedText}
          onChange={handleTextChange}
          onKeyUp={handleKeyUp}
          style={{
            flex: 1,
            alignSelf: 'center',
            paddingLeft: 12,
          }}
        ></TextField>
      ) : (
        <Typography
          variant="subtitle2"
          style={{
            flex: 1,
            alignSelf: 'center',
            fontSize: 18,
            paddingLeft: 12,
          }}
          onClick={toggleEditMode}
        >
          {isCompleted ? <s>{text}</s> : text}
        </Typography>
      )}
      <StyledButton isEdited={isEdited} variant="outlined" size="small" onClick={toggleEditMode}>
        <Edit />
      </StyledButton>
      <Button sx={{ minWidth: 'auto' }} size="small" onClick={handleDeleteButtonClick}>
        <Delete />
      </Button>
    </Stack>
  );
});
