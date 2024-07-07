import {
  Checkbox as MUICehckbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import React, { FC } from "react";

type BaseProps = {
  label: string;
};

type Props = BaseProps & CheckboxProps;

export const Checkbox: FC<Props> = ({ label, ...rest }) => {
  return <FormControlLabel control={<MUICehckbox {...rest} />} label={label} />;
};
