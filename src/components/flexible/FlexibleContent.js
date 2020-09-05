import React from "react";

import Error from './ErrorBlock'
import Body from "./blocks/BlockBody";

const registeredBlocks = [
  { slug: "home", comp: Body },
];

const Flexible = props =>
  // Dynamic ACF Flexible Content Blocks handling
  props.blocks ? (
    <div className="flexible-content">
      {/* Render any found Flexible content blocks */
      props.blocks
        ? props.blocks.map((block, i) => {
            /* Get block slug from ACF id */
            const slug = block.__typename ? block.__typename.split("_")[1] : "block_error";
            /* Setup default JSX case */
            const blockClass = "layout-block " + slug + "-block";
            let JSX = Error;
            /* Check current page slug for registered block */
            registeredBlocks.forEach(piece => {
              if (piece.slug === slug) {
                JSX = piece.comp;
              }
            });
            return (
              <div key={block.__typename + i} className={blockClass}>
                <JSX block={block} slug={slug}/>
              </div>
            );
          })
        : null}
    </div>
  ) : null;

export default Flexible;
