import React from "react";
import { WMKLink } from "wmk-lib";
import { locale } from "./"

export const inlineAssetHyperlink = (node, children) => {
  const { nodeType, data } = node;
  const url = data.target.fields.file[locale].url;
  let JSX = null;
  switch (nodeType) {
    case "asset-hyperlink":
      JSX = ({ children }) => (
        <WMKLink to={url} target="self" className="inline">
          {children}
        </WMKLink>
      );
      break;
    default:
      console.log(nodeType + " not set");
  }
  return <JSX>{children}</JSX>;
};
