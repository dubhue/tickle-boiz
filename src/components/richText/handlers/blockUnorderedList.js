import React from "react";
import { BaseComps } from "./baseComponents";

export const blockUnorderedList = (node) => {
  const { content } = node;
  return (
    content && (
      <ul className="droplet-list" style={{ listStyle: "none" }}>
        {content.map((li, i) => {
          //console.log(li);
          const JSX = BaseComps[li.nodeType];
          return JSX ? (
            <JSX content={li.content} key={li.nodeType + i + "-key"} />
          ) : (
            <em className="error">Error on list-item node: {li.nodeType}</em>
          );
        })}
      </ul>
    )
  );
};
