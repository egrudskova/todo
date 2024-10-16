import { Button, Checkbox, Stack, Typography } from '@mui/material';
import { removeTodo, toggleTodoIsCompleted, toggleTodoIsEdited } from '../features/todo/todosSlice.ts';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { useAppDispatch } from '../store/hooks.ts';
import { Todo } from '../features/todo/types.ts';

interface ListItemProps {
  todo: Todo;
}

const ListItem = ({ todo }: ListItemProps): React.JSX.Element => {
  const { id, text, isCompleted } = todo;
  const dispatch = useAppDispatch();
  return (
    <Stack direction={'row'} padding={1}>
      <Checkbox
        aria-label={'label ' + text}
        checked={isCompleted}
        onChange={() => {
          dispatch(toggleTodoIsCompleted({ id }));
        }}
      />
      <Typography
        variant="subtitle2"
        style={{
          flex: 1,
          alignSelf: 'center',
          fontSize: 18,
          paddingLeft: 12,
        }}
      >
        {isCompleted ? <s>{text}</s> : text}
      </Typography>
      <Button
        sx={{ marginRight: '5px' }}
        size="small"
        onClick={() => {
          dispatch(removeTodo({ id }));
        }}
      >
        <Delete />
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          dispatch(toggleTodoIsEdited({ id }));
        }}
      >
        <Edit />
      </Button>
    </Stack>
  );
};

export default ListItem;
