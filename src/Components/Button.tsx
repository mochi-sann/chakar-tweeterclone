import classNames from "classnames";
import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  color?: "blue" | "red" | "green" | "blue-hover";
  outline?: boolean;
  leftIcon?: React.ReactNode;
  wFull?: boolean;
};

const Button: React.VFC<ButtonProps> = (props) => {
  return (
    <button
      className={classNames(
        "btn",
        "btn-" + (props.color || "blue"),
        props.wFull && "w-full"
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
