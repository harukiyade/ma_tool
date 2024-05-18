import React from "react";

type Props = {
  children: React.ReactNode;
  index: number;
  value: number;
};

/**
 * MUIのTab選択時に表示するコンテンツをラップするコンポーネント
 */
export const TabContentFrame = ({ children, index, value }: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabId-${index}`}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
