import React, { MouseEventHandler, ReactNode } from "react";

type RoundedButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fill?: "#526fff" | "#22242d";
  className?: string;
  [key: string]: any;
};
export default function RoundedButton(props: RoundedButtonProps) {
  const { children, onClick, fill, className, ...rest } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: fill,
        color: fill === "#526fff" ? "#06070b" : "",
      }}
      className={`${className} border border-[#22242d] rounded-full h-[28px] text-[12px] font-[600] cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}
