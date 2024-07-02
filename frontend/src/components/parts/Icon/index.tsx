import React, { FC } from "react";
import { IconProps } from "@mui/material/Icon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CloseIcon from "@mui/icons-material/Close";

export type IconType =
  | "list"
  | "search"
  | "sales"
  | "copy"
  | "newTab"
  | "doNot"
  | "question"
  | "check"
  | "close";
type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & Pick<IconProps, "color" | "fontSize">;

const iconMap = {
  search: SearchIcon,
  list: ListAltIcon,
  sales: AutoGraphOutlinedIcon,
  copy: ContentCopyIcon,
  newTab: OpenInNewIcon,
  doNot: DoNotDisturbIcon,
  question: HelpOutlineIcon,
  check: TaskAltIcon,
  close: CloseIcon,
};

export const Icon: FC<Props> = ({ icon, color, fontSize }) => {
  const Icon = iconMap[icon] || null;
  return Icon && <Icon color={color} fontSize={fontSize} />;
};
