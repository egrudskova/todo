import { StyledComponent } from '@emotion/styled';
import { customButtonProps, styledButtonProps } from './types.ts';
import { Button, styled } from '@mui/material';

export const StyledButton: StyledComponent<styledButtonProps> = styled(Button)(({ isEdited }: customButtonProps) => ({
  minWidth: 'auto',
  backgroundColor: isEdited ? 'rgba(25, 118, 210, 0.3)' : 'transparent',
  borderColor: 'transparent',
}));
