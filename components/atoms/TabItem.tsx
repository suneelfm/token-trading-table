import React, { MouseEventHandler, ReactNode } from "react";

type TabItemProps = {
  children: ReactNode;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function TabItem(props: TabItemProps) {
  const { children, isActive, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ color: isActive ? "#526fff" : "" }}
      className="px-[10px] py-[5px] h-full hover:bg-[#526fff33] hover:text-[#526fff] rounded-[4px] cursor-pointer text-[12px] font-[600] mr-[9px]"
    >
      {children}
    </button>
  );
}
