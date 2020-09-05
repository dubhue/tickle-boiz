import React from "react";
import {Paragraph} from '../elements/Paragraph'

export const blockQuote = (node) => {
  const { content } = node;
  return (
    <blockquote className="body-copy-quote">
      {content &&
        content.length &&
        content.map((el) => {
          const elContent = el.content;
          return <Paragraph content={elContent} />;
        })}
    </blockquote>
  );
};
