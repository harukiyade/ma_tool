import React, { FC } from "react";
import { IconProps } from "@mui/material/Icon";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export type IconType =
  | "AISales"
  | "sales"
  | "search"
  | "list"
  | "flag"
  | "analysis";
type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & Pick<IconProps, "color" | "fontSize">;

const iconMap = {
  AISales: ElectricBoltIcon,
  sales: AutoGraphOutlinedIcon,
  search: SearchIcon,
  list: ListAltIcon,
  flag: FlagOutlinedIcon,
  analysis: QueryStatsIcon,
};

export const Icon: FC<Props> = ({ icon, color, fontSize }) => {
  const Icon = iconMap[icon] || null;
  return Icon && <Icon color={color} fontSize={fontSize} />;
};
