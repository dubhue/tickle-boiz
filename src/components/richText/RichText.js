import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import options from "./handlers/richTextOptions";

const RichText = ({ json }) => {
  return <>{documentToReactComponents(json,options)}</>;
};

export default RichText;
