import {
  IconButton,
  Snackbar as MUISnackbar,
  SnackbarProps,
} from "@mui/material";
import React, { FC } from "react";
import { Icon } from "../Icon";

type Props = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
} & React.PropsWithoutRef<SnackbarProps>;

/** コピーした後とかに左下に出るダイアログ */
export const Snackbar: FC<Props> = ({ message, isOpen, onClose }) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  // snackbarのUI
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Icon fontSize="small" icon="close" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <MUISnackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
      sx={{ backgroundColor: "secondary" }}
    />
  );
};
