import React from "react";
import { WMKLink } from "wmk-lib";
import { R } from "../../components/common/";

export const inlineHyperlink = (node, children) => {
  //console.log(children)
  return (
    <>
      <WMKLink to={node.data.uri}>
        <R>{children}</R>
      </WMKLink>
    </>
  );
};
