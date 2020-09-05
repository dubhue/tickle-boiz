import React from "react";
import { WMKLink } from "wmk-lib";

import { locale } from "./"

const getEntryPath = (fields) => {
  const entry = fields.entry[locale];
  const slug = entry.fields.slug[locale];
  const path = "/" + slug;
  return path;
};

const RenderEntry = {
  links: ({ fields, children }) => {
    return <WMKLink to={getEntryPath(fields)}>{children}</WMKLink>;
  },
};

export const inlineEntryHyperlink = (node, children) => {
  const { fields } = node.data.target;
  const contentType =
    node.data.target.sys.contentType && node.data.target.sys.contentType.sys.id;

  const JSX = RenderEntry[contentType];

  return JSX ? (
    <JSX fields={fields}>{children}</JSX>
  ) : (
    <em className="hyperlink-error error">
      {children}
      {console.log("inline hyperlink " + contentType + " not set")}
    </em>
  );
};
