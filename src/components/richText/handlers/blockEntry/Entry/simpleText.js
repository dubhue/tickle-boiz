import React from "react";
import marked from "marked";
import styled from "styled-components";

const MarkdownWrap = styled.div`
  display: flex;
  justify-content: center;
  .markdown-text {
    display: inline-block;
  }
`;

export default ({ fields }) => {
  const loc = "en-US";
  const { simpleLongText } = fields;
  const markdown = simpleLongText[loc];
  return (
    <MarkdownWrap>
      <div
        className="markdown-text"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </MarkdownWrap>
  );
};
