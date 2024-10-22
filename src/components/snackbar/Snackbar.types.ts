export interface SnackbarProps {
  message: string;
  handleVisibilityChange: (isVisible: boolean) => void;
  isVisible: boolean;
}
