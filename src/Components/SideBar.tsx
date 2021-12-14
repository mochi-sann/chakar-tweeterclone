import React from "react";
import Button from "./Button";

export type SideBarProps = {
  children: React.ReactNode;
  SideBarChildren: React.ReactNode;
};

const SideBar: React.VFC<SideBarProps> = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-2 p-2 w-60">
        <Button color="blue-hover">Home</Button>
        <Button color="blue-hover">Settings</Button>
        <Button color="blue-hover">Settings</Button>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default SideBar;
