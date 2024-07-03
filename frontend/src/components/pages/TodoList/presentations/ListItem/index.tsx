import {
  ListItem as MUIListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Icon, IconType } from "@/components/parts/Icon";

type Props = {
  text: string;
  secondaryText?: string;
  icon?: IconType;
};

export const ListItem = ({ text, secondaryText, icon }: Props) => {
  return (
    <MUIListItem disablePadding>
      <ListItemButton>
        {icon && (
          <ListItemIcon>
            <Icon icon={icon} />
          </ListItemIcon>
        )}
        <ListItemText secondary={secondaryText}>
          <Typography>{text}</Typography>
        </ListItemText>
      </ListItemButton>
    </MUIListItem>
  );
};
