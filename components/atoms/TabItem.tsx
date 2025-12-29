import React, { ReactNode } from "react";

type TabItemProps = {
  children: ReactNode;
};
export default function TabItem(props: TabItemProps) {
  const { children } = props;
  return (
    <button className="px-[10px] py-[5px] h-full hover:bg-[#526fff33] hover:text-[#526fff] rounded-[4px] cursor-pointer text-[12px] font-[600] mr-[9px]">
      {children}
    </button>
  );
}
