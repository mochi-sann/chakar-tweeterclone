import classNames from "classnames";
import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  color?: "blue" | "red" | "green";
  outline?: boolean;
  leftIcon?: React.ReactNode;
};

const Button: React.VFC<ButtonProps> = (props) => {
  return (
    <button className={classNames("btn", "btn-" + (props.color || "blue"))}>
      {props.children}
    </button>
  );
};

export default Button;
