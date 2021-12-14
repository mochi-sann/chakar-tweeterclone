import React from "react";
import Signin from "./Signin";

export type LayoutHeaderProps = { title: string };

const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  return (
    <nav className="flex items-center h-16 dark:bg-gray-800 bg-slate-100">
      <div className="flex gap-2 items-center p-2 mx-auto w-full max-w-3xl">
        <div className="flex">
          <h1 className="text-2xl font-bold">{props.title}</h1>
        </div>
        <div className="flex justify-end w-full">
          <Signin />
        </div>
      </div>
    </nav>
  );
};

export default LayoutHeader;
