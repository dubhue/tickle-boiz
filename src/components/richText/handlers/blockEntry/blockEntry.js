import React from "react";
import SimpleText from "./Entry/simpleText";
import VideoEmbed from "./Entry/videoEmbed";
import { Row } from "react-bootstrap";

const RenderEntry = {
  simpleText: ({ fields }) => <SimpleText fields={fields} />,
  videoEmbed: ({ fields }) => (
    <Row style={{ justifyContent: "center" }}>
      <VideoEmbed fields={fields} />
    </Row>
  ),
};

export const blockEntry = (node) => {
  const contentType =
    node.data.target.sys &&
    node.data.target.sys.contentType &&
    node.data.target.sys.contentType.sys.id;
  const { fields } = node.data.target;
  const JSX = RenderEntry[contentType];
  return JSX ? (
    <JSX fields={fields} />
  ) : (
    <em className="error">Error loading entry. {contentType}</em>
  );
};
