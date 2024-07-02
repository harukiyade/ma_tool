import { Modal } from "@/components/parts/Modal";
import { Divider } from "@mui/material";
import React, { ComponentPropsWithoutRef, FC } from "react";

type Props = Omit<ComponentPropsWithoutRef<typeof Modal>, "children">;

export const CompanySearchOverlay: FC<Props> = ({ isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Divider />
      会社検索オーバーレイ
    </Modal>
  );
};
