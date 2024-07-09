import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import React, { forwardRef } from "react";

type Variant = "outlined" | "filled" | "standard";

type BaseProps = {
  label: string;
  variant?: Variant;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  size?: "small" | "medium";
};

type Props = BaseProps & TextFieldProps;

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      variant = "outlined",
      value,
      onChange,
      error,
      errorMessage,
      size = "medium",
      sx,
    }: Props,
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value); // 親から子へのコールバック
    };

    return (
      <MUITextField
        label={label}
        variant={variant}
        value={value}
        error={error}
        helperText={error && errorMessage}
        fullWidth
        onChange={handleChange}
        size={size}
        ref={ref}
        sx={sx}
      />
    );
  }
);
TextField.displayName = "TextField";
