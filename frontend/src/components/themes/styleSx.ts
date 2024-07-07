export const textFieldSx = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: "primary.dark", // フォーカス時のラベル色
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "primary.dark", // フォーカス時のアウトライン色
    },
  },
};

export const textFieldSecondarySx = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: "secondary.dark", // フォーカス時のラベル色
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "secondary.dark", // フォーカス時のアウトライン色
    },
  },
};

export const buttonSxTextSecondary = {
  color: "secondary.main",
};

export const buttonSxContainedSecondary = {
  borderColor: "secondary.main",
  backgroundColor: "secondary.main", // 通常時の背景色
  "&:hover": {
    backgroundColor: "secondary.dark", // ホバー時の背景色
  },
};

export const buttonSxOutlinedSecondary = {
  color: "secondary.main",
  borderColor: "secondary.main",
  "&:hover": {
    borderColor: "secondary.dark",
    color: "secondary.dark",
  },
};

export const checkboxSxSecondary = {
  // color: "secondary.main",
  "&.Mui-checked": {
    color: "secondary.main",
  },
};
