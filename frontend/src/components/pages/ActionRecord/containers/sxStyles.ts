export const fab = {
  position: "fixed",
  bottom: 80,
  right: 44,
  bgcolor: "secondary.main",
  color: "background.paper",
  "&:hover": {
    backgroundColor: "secondary.dark", // ホバー時の背景色
  },
};

export const bottomNav = {
  "&.Mui-selected": {
    color: "secondary.main", // フォーカス（選択）時の色
  },
};

export const paper = { position: "fixed", bottom: 0, left: 0, right: 0 };
