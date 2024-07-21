import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { IconProps } from "@mui/material/Icon";
import React from "react";

export type IconType =
  | "list"
  | "search"
  | "sales"
  | "copy"
  | "newTab"
  | "doNot"
  | "question"
  | "check"
  | "close"
  | "bookmark";
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
  bookmark: BookmarkAddIcon,
};

export const Icon = ({ icon, color, fontSize }: Props) => {
  const Icon = iconMap[icon] || null;
  return Icon && <Icon color={color} fontSize={fontSize} />;
};
