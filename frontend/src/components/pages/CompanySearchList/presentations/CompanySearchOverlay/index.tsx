import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { Modal } from "@/components/parts/Modal";
import styles from "./index.module.scss";

type Props = Omit<ComponentPropsWithoutRef<typeof Modal>, "children">;

export const CompanySearchOverlay: FC<Props> = ({ isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Divider />
      <div className={styles.container}>
        <div>
          <Typography fontWeight="bold">売上高</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="～1億" />
          </FormGroup>
        </div>
        <div>
          <Typography fontWeight="bold">正社員数</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="～1億" />
          </FormGroup>
        </div>
        <div>
          <Typography fontWeight="bold">設立年数</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="～1億" />
          </FormGroup>
        </div>
        <div>
          <Typography fontWeight="bold">資本金</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="～1億" />
          </FormGroup>
        </div>
        <div>
          <Typography fontWeight="bold">上場区分</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="～1億" />
          </FormGroup>
        </div>
      </div>
    </Modal>
  );
};
