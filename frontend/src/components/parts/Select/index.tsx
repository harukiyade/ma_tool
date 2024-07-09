import { Select as MUISelect, SelectChangeEvent } from "@mui/material";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { forwardRef } from "react";

type BaseProps = {
  label: string;
  value: string;
  /** MenuItemに格納する値をまとめた配列、validateを使わないときのみ定義 */
  options: Array<string | number>;
  /**MenuItemに'分'などを付け足したいときに使用 */
  menuItemText?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: SelectChangeEvent) => void;
  error?: boolean;
  errorMessage?: string;
  size?: "small" | "medium";
};

type SelectProps = React.ComponentPropsWithoutRef<"select">;
type Props = BaseProps & Omit<SelectProps, keyof BaseProps>;

// eslint-disable-next-line react/display-name
export const Select = forwardRef(
  (
    {
      id,
      label,
      value,
      options,
      menuItemText,
      onChange,
      error,
      errorMessage,
      size = "medium",
    }: Props,
    ref
  ) => {
    const handleChange = (event: SelectChangeEvent) => {
      onChange(event); // 親から子へのコールバック
    };

    return (
      <FormControl fullWidth error={error} size={size}>
        <InputLabel
          id={label}
          sx={{
            "&.Mui-focused": {
              color: "primary.dark", // フォーカス時のラベル色
            },
          }}
        >
          {label}
        </InputLabel>
        <MUISelect
          labelId={label}
          id={id}
          label={label}
          value={value}
          onChange={handleChange}
          ref={ref}
          sx={{
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.dark",
            },
          }}
        >
          {options?.map((item, index) => (
            <MenuItem value={item} key={index}>
              {menuItemText ? item + menuItemText : item}
            </MenuItem>
          ))}
        </MUISelect>
        {error && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    );
  }
);
