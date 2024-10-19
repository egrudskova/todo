import { Todo } from '../../features';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

export interface ListItemProps {
  id: Todo['id'];
}

export type customButtonProps = { isEdited: boolean };
export type styledButtonProps = MuiButtonProps & { isEdited: boolean };
