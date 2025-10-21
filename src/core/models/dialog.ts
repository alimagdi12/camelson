export interface CustomDialogProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  hideActions?: boolean;
}