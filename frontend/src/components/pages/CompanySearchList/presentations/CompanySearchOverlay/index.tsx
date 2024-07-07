import { Divider, FormGroup, Typography } from "@mui/material";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { Button } from "@/components/parts/Button";
import { Checkbox } from "@/components/parts/Checkbox";
import { Modal } from "@/components/parts/Modal";
import {
  buttonSxContainedSecondary,
  buttonSxTextSecondary,
  checkboxSxSecondary,
} from "@/components/themes/styleSx";
import { capitals, employees, foundYears, salesOpts } from "./constants";
import styles from "./index.module.scss";

type Props = Omit<ComponentPropsWithoutRef<typeof Modal>, "children">;

export const CompanySearchOverlay: FC<Props> = ({ isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Divider />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <Typography fontWeight="bold">売上高</Typography>
          <FormGroup>
            {salesOpts.map((opt) => {
              return (
                <React.Fragment key={opt}>
                  <Checkbox label={opt} size="small" sx={checkboxSxSecondary} />
                </React.Fragment>
              );
            })}
          </FormGroup>
        </div>
        <div className={styles.formWrapper}>
          <Typography fontWeight="bold">正社員数</Typography>
          <FormGroup>
            {employees.map((employee) => {
              return (
                <React.Fragment key={employee}>
                  <Checkbox
                    label={employee}
                    size="small"
                    sx={checkboxSxSecondary}
                  />
                </React.Fragment>
              );
            })}
          </FormGroup>
        </div>
        <div className={styles.formWrapper}>
          <Typography fontWeight="bold">設立年数</Typography>
          <FormGroup>
            {foundYears.map((year) => {
              return (
                <React.Fragment key={year}>
                  <Checkbox
                    label={year}
                    size="small"
                    sx={checkboxSxSecondary}
                  />
                </React.Fragment>
              );
            })}
          </FormGroup>
        </div>
        <div className={styles.formWrapper}>
          <Typography fontWeight="bold">資本金</Typography>
          <FormGroup>
            {capitals.map((capital) => {
              return (
                <React.Fragment key={capital}>
                  <Checkbox
                    label={capital}
                    size="small"
                    sx={checkboxSxSecondary}
                  />
                </React.Fragment>
              );
            })}
          </FormGroup>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          variant="text"
          fullWidth={false}
          sx={buttonSxTextSecondary}
          onClick={onClose}
        >
          戻る
        </Button>
        <Button
          variant="contained"
          fullWidth={false}
          sx={buttonSxContainedSecondary}
          onClick={onClose}
        >
          確定
        </Button>
      </div>
    </Modal>
  );
};
