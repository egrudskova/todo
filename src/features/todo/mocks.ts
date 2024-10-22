import { v4 as uuidv4 } from 'uuid';
import { Todo } from './types.ts';

export const todosMock: Todo[] = [
  {
    id: uuidv4(),
    text: 'Study React and Typescript',
    isCompleted: true,
    isEdited: false,
  },
  {
    id: uuidv4(),
    text: 'Send test task to Mindbox',
    isCompleted: true,
    isEdited: false,
  },
  {
    id: uuidv4(),
    text: 'Receive feedback',
    isCompleted: false,
    isEdited: false,
  },
];
