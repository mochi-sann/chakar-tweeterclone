import React from "react";

export type LauoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Lauout: React.VFC<LauoutProps> = (props) => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <div>ヘッダー</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Lauout;
