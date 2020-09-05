import React from "react";
import { locale } from "./";

const RenderAsset = {
  image: ({ fields }) => {
    const { title, file } = fields;
    const imgUrl = file ? file[locale].url : false;
    const imgAlt = title ? title[locale] : "";
    //const desc = description ? description[locale] : false;
    return (
      <figure className="embedded-image-wrap" style={{ marginBottom: "3vh" }}>
        <img
          className="embedded-image"
          src={imgUrl + "?w=700&h=400&q=75&fit=pad"}
          width={700}
          height={400}
          alt={imgAlt}
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        {/* {desc && (
          <figcaption className="embedded-image-description">{desc}</figcaption>
        )} */}
      </figure>
    );
  },
  application: ({ fields }) => {
    // const title = fields.title[locale];
    // const url = fields.file[locale].url;
    return <div className="embedded-file">button</div>;
  },
};

export const blockAsset = (node) => {
  const fields = node.data.target.fields;
  const { contentType } = fields.file[locale];
  const _type = contentType.split("/")[0];
  const JSX = RenderAsset[_type];
  return JSX ? (
    <JSX fields={fields} />
  ) : (
    <em className="error">error with embedded asset block: {_type}</em>
  );
};
