import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/parts/Button";
import { TextField } from "@/components/parts/TextField";
import {
  buttonSxOutlinedSecondary,
  textFieldSecondarySx,
} from "@/components/themes/styleSx";
import { AdditionalInfoFormType } from "../../containers/formSchema";
import { AdditionalDataDisplayType } from "../BasicInfo";
import styles from "./index.module.scss";
import { dialogPaper, iconButton } from "./sxStyles";

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
        sx: dialogPaper,
      }}
    >
      <DialogTitle>
        <Typography variant="h3">追加情報を入力</Typography>
      </DialogTitle>
      <IconButton aria-label="close" onClick={handleClose} sx={iconButton}>
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
        <Button
          variant="text"
          onClick={handleClose}
          sx={buttonSxOutlinedSecondary}
        >
          戻る
        </Button>
        <Button variant="text" type="submit" sx={buttonSxOutlinedSecondary}>
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};
