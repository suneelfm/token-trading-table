import React, { MouseEventHandler, ReactNode } from "react";

type RoundedButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fill?: "#526fff" | "#22242d";
  [key: string]: any;
};
export default function RoundedButton(props: RoundedButtonProps) {
  const { children, onClick, fill, ...rest } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: fill,
        color: fill === "#526fff" ? "#06070b" : "White",
      }}
      className={`border border-[#22242d] rounded-full h-[28px] text-[12px] font-[600] cursor-pointer mx-[10px]`}
      {...rest}
    >
      {children}
    </button>
  );
}
