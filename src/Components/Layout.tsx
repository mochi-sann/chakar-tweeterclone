import React from "react";
import LayoutHeader from "./LayoutHeader";

export type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = (props) => {
  return (
    <div className="flex flex-col">
      <LayoutHeader title="tweet" />
      <div className="mx-auto max-w-3xl">{props.children}</div>
    </div>
  );
};

export default Layout;
