import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./index.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Modal: FC<Props> = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle style={{ padding: "16px 24px 8px 24px" }}>
        {title}
      </DialogTitle>
      <div className={styles.contentWrapper}>{children}</div>
    </Dialog>
  );
};
