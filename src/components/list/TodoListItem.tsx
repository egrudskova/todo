import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { editTodoText, removeTodo, toggleTodoIsCompleted, toggleTodoIsEdited } from '../../features';
import { Delete, Edit } from '@mui/icons-material';
import React, { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { ListItemProps } from './types.ts';
import { selectTodoById } from '../../features';

export const TodoListItem = memo(({ id }: ListItemProps): React.JSX.Element => {
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
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleIcon />}
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
        <ListItemText onClick={toggleEditMode}>{isCompleted ? <s>{text}</s> : text}</ListItemText>
      )}
    </ListItem>
  );
});
