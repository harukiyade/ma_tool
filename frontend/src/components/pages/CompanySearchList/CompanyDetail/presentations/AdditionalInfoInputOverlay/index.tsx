import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import { AdditionalInfoFormType } from "../../containers/formSchema";
import { AdditionalDataDisplayType } from "../BasicInfo";
import { IconButton, Typography } from "@mui/material";
import styles from "./index.module.scss";
import { TextField } from "@/components/parts/TextField";
import {
  buttonSxOutlined,
  textFieldSecondarySx,
} from "@/components/themes/styleSx";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@/components/parts/Button";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: SubmitHandler<AdditionalInfoFormType>;
  methods: UseFormReturn<AdditionalInfoFormType>;
  formOptions: AdditionalDataDisplayType;
};

export const AdditionalInfoInputOverlay = ({
  isOpen,
  handleClose,
  onSubmit,
  methods,
  formOptions,
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: methods.handleSubmit(onSubmit),
        sx: { width: "fit-content", maxWidth: "none" },
      }}
    >
      <DialogTitle>
        <Typography variant="h3">追加情報を入力</Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className={styles.dialogContent}>
        {formOptions.map((option) => {
          return (
            <div key={option.title} className={styles.inputWrapper}>
              <Typography
                variant="caption"
                color="text.secondary"
                component="dt"
              >
                {option.title}
              </Typography>
              <Controller
                control={methods.control}
                name={option.formName}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={`${option.title}を入力`}
                    value={methods.getValues(option.formName)}
                    size="small"
                    sx={textFieldSecondarySx}
                  />
                )}
              />
            </div>
          );
        })}
      </DialogContent>
      <DialogActions className={styles.buttonWrapper}>
        <Button variant="text" onClick={handleClose} sx={buttonSxOutlined}>
          戻る
        </Button>
        <Button variant="text" type="submit" sx={buttonSxOutlined}>
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};
