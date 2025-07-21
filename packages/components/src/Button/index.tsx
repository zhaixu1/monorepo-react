import React from "react";
import "./index.less";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="my-btn" {...rest}>{children}</button>
);

export default Button;