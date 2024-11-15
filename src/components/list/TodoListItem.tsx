import React, { memo, useState } from 'react';
import { Checkbox, IconButton, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { CheckCircle, CheckCircleOutline, Delete, Edit } from '@mui/icons-material';
import { editTodoText, removeTodo, selectTodoById, toggleTodoIsCompleted, toggleTodoIsEdited } from '@/features';
import { useAppDispatch, useAppSelector } from '@/store';
import { ListItemProps } from './TodoListItem.types.ts';
import { AppSnackbar } from '@/components/snackbar';

export const TodoListItem = memo(({ id }: ListItemProps): React.JSX.Element => {
  const todo = useAppSelector((state) => selectTodoById(state, id));
  const { text, isCompleted, isEdited } = todo;
  const [editedText, setEditedText] = useState<string>(text);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleTextChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setEditedText(evt.target.value);
  };

  const handleSnackVisibilityChange = (isVisible: boolean): void => {
    setIsSnackbarVisible(isVisible);
  };

  const toggleEditMode = (): void => {
    dispatch(toggleTodoIsEdited({ id }));
    if (editedText === '') {
      handleSnackVisibilityChange(true);
      setEditedText(text);
    } else if (editedText !== text) {
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
    <ListItem
      sx={{ maxHeight: '58px', paddingLeft: 0, paddingRight: 0 }}
      secondaryAction={
        <>
          <IconButton
            aria-label="edit"
            onClick={toggleEditMode}
            sx={{ color: isEdited ? 'primary.main' : 'secondary.main' }}
          >
            <Edit />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDeleteButtonClick}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <Checkbox
        icon={<CheckCircleOutline />}
        checkedIcon={<CheckCircle />}
        aria-label={'label ' + text}
        checked={isCompleted}
        onChange={() => {
          dispatch(toggleTodoIsCompleted({ id }));
        }}
        style={{
          paddingRight: 12,
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
            paddingRight: '100px',
            alignSelf: 'center',
          }}
        />
      ) : (
        <ListItemText onClick={toggleEditMode}>
          {isCompleted ? (
            <Typography sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>{text}</Typography>
          ) : (
            <Typography>{text}</Typography>
          )}
        </ListItemText>
      )}
      <AppSnackbar
        handleVisibilityChange={handleSnackVisibilityChange}
        isVisible={isSnackbarVisible}
        message="Cannot save empty todo. Restoring original text"
      />
    </ListItem>
  );
});
