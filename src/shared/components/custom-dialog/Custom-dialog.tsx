import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { CustomDialogProps } from "../../../core/models/dialog";

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  title,
  onClose,
  children,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  hideActions = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          padding: "8px 0",
        },
      }}
    >
      {/* Header */}
      {title && (
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          {title}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}

      {/* Body */}
      <DialogContent dividers>{children}</DialogContent>

      {/* Actions */}
      {!hideActions && (
        <DialogActions>
          <Button onClick={onClose}>{cancelText}</Button>
          {onConfirm && (
            <Button onClick={onConfirm} variant="contained" color="primary">
              {confirmText}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
